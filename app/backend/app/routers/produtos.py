from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session, joinedload
from app.database import get_db
from app.models.models import Produto, Estoque, ProdutoCategoria, Categoria, ProdutoImagem
from app.schemas.produto_schemas import ProdutoCreate, ProdutoResponse, ProdutoUpdate

router = APIRouter()

@router.post("/produtos/", response_model=ProdutoResponse)
def create_produto(produto: ProdutoCreate, db: Session = Depends(get_db)):
    categoria = db.query(Categoria).filter(Categoria.id == produto.categoria_id).first()
    if not categoria:
        raise HTTPException(status_code=400, detail="Categoria não encontrada")

    novo_produto = Produto(
        nome=produto.nome,
        descricao=produto.descricao,
        preco=produto.preco,
        codigo=produto.codigo
    )
    db.add(novo_produto)
    db.flush()  
    novo_estoque = Estoque(produto_id=novo_produto.id, quantidade_atual=produto.quantidade_inicial)
    db.add(novo_estoque)
    nova_relacao_categoria = ProdutoCategoria(produto_id=novo_produto.id, categoria_id=categoria.id)
    db.add(nova_relacao_categoria)
    db.commit()
    db.refresh(novo_produto)

    return ProdutoResponse(
        id=novo_produto.id,
        nome=novo_produto.nome,
        descricao=novo_produto.descricao,
        preco=novo_produto.preco,
        codigo=novo_produto.codigo,
        quantidade_estoque=novo_estoque.quantidade_atual,
        categorias=[{"id": categoria.id, "nome": categoria.nome}],
        imagens=[]
    )

@router.get("/produtos/{produto_id}", response_model=ProdutoResponse)
def get_produto(produto_id: int, db: Session = Depends(get_db)):
    produto = (
        db.query(Produto)
        .options(
            joinedload(Produto.estoque),
            joinedload(Produto.categorias).joinedload(ProdutoCategoria.categoria),
            joinedload(Produto.imagens)
        )
        .filter(Produto.id == produto_id)
        .first()
    )
    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")
    return ProdutoResponse(
        id=produto.id,
        nome=produto.nome,
        descricao=produto.descricao,
        preco=produto.preco,
        codigo=produto.codigo,
        quantidade_estoque=produto.estoque.quantidade_atual if produto.estoque else 0,
        categorias=[{"id": cat.categoria.id, "nome": cat.categoria.nome} for cat in produto.categorias],
        imagens=[{"id": img.id, "url_imagem": img.url_imagem, "ordem": img.ordem} for img in produto.imagens]
    )

@router.get("/produtos/", response_model=dict)
def get_produtos(
    db: Session = Depends(get_db),
    page: int = Query(1, ge=1),  # Página atual (começa em 1)
    page_size: int = Query(10, ge=1, le=100),  # Itens por página
    search: str = Query(None),  # Filtro de busca por nome
    categoria_id: int = Query(None)  # Filtro por categoria
):
    # Query base
    query = db.query(Produto).options(
        joinedload(Produto.estoque),
        joinedload(Produto.categorias).joinedload(ProdutoCategoria.categoria),
        joinedload(Produto.imagens)
    )

    # Aplicar filtros
    if search:
        query = query.filter(Produto.nome.ilike(f"%{search}%"))  # Busca por nome
    if categoria_id:
        query = query.join(Produto.categorias).filter(ProdutoCategoria.categoria_id == categoria_id)  # Filtro por categoria

    # Paginação
    total = query.count()  # Total de produtos
    offset = (page - 1) * page_size
    produtos = query.offset(offset).limit(page_size).all()

    # Formatar resposta
    return {
        "items": [
            ProdutoResponse(
                id=produto.id,
                nome=produto.nome,
                descricao=produto.descricao,
                preco=produto.preco,
                codigo=produto.codigo,
                quantidade_estoque=produto.estoque.quantidade_atual if produto.estoque else 0,
                categorias=[{"id": cat.categoria.id, "nome": cat.categoria.nome} for cat in produto.categorias],
                imagens=[{"id": img.id, "url_imagem": img.url_imagem, "ordem": img.ordem} for img in produto.imagens]
            )
            for produto in produtos
        ],
        "total": total,
        "page": page,
        "page_size": page_size
    }

@router.put("/produtos/{produto_id}", response_model=ProdutoResponse)
def update_produto(produto_id: int, produto_update: ProdutoUpdate, db: Session = Depends(get_db)):
    produto = db.query(Produto).filter(Produto.id == produto_id).first()
    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    if produto_update.nome is not None:
        produto.nome = produto_update.nome
    if produto_update.descricao is not None:
        produto.descricao = produto_update.descricao
    if produto_update.preco is not None:
        produto.preco = produto_update.preco
    if produto_update.codigo is not None:
        produto.codigo = produto_update.codigo

    estoque = db.query(Estoque).filter(Estoque.produto_id == produto_id).first()
    if estoque and produto_update.quantidade_estoque is not None:
        estoque.quantidade_atual = produto_update.quantidade_estoque

    if produto_update.categoria_id:
        db.query(ProdutoCategoria).filter(ProdutoCategoria.produto_id == produto_id).delete()
        nova_categoria = ProdutoCategoria(produto_id=produto.id, categoria_id=produto_update.categoria_id)
        db.add(nova_categoria)

    db.commit()
    db.refresh(produto)

    return ProdutoResponse(
        id=produto.id,
        nome=produto.nome,
        descricao=produto.descricao,
        preco=produto.preco,
        codigo=produto.codigo,
        quantidade_estoque=produto.estoque.quantidade_atual if produto.estoque else 0,
        categorias=[{"id": cat.categoria.id, "nome": cat.categoria.nome} for cat in produto.categorias],
        imagens=[{"id": img.id, "url_imagem": img.url_imagem, "ordem": img.ordem} for img in produto.imagens]
    )

@router.delete("/produtos/{produto_id}", status_code=204)
def delete_produto(produto_id: int, db: Session = Depends(get_db)):
    produto = db.query(Produto).filter(Produto.id == produto_id).first()
    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")
    db.query(ProdutoCategoria).filter(ProdutoCategoria.produto_id == produto_id).delete()
    db.query(Estoque).filter(Estoque.produto_id == produto_id).delete()
    db.delete(produto)
    db.commit()
    return {"message": "Produto excluído com sucesso"}
