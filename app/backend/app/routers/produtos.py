from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import select
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
        preco=produto.preco
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
        quantidade_estoque=produto.estoque.quantidade_atual if produto.estoque else 0,
        categorias=[{"id": cat.categoria.id, "nome": cat.categoria.nome} for cat in produto.categorias],
        imagens=[{"id": img.id, "url_imagem": img.url_imagem, "ordem": img.ordem} for img in produto.imagens]
    )


@router.get("/produtos/", response_model=list[ProdutoResponse])
def get_produtos(db: Session = Depends(get_db)):
    produtos = (
        db.query(Produto)
        .options(
            joinedload(Produto.estoque),
            joinedload(Produto.categorias).joinedload(ProdutoCategoria.categoria),
            joinedload(Produto.imagens)
        )
        .all()
    )

    return [
        ProdutoResponse(
            id=produto.id,
            nome=produto.nome,
            descricao=produto.descricao,
            preco=produto.preco,
            quantidade_estoque=produto.estoque.quantidade_atual if produto.estoque else 0,
            categorias=[{"id": cat.categoria.id, "nome": cat.categoria.nome} for cat in produto.categorias],
            imagens=[{"id": img.id, "url_imagem": img.url_imagem, "ordem": img.ordem} for img in produto.imagens]
        )
        for produto in produtos
    ]

# @router.get("/produtos/", response_model=list[ProdutoResponse])
# def get_produtos(db: Session = Depends(get_db)):
#     produtos = db.query(Produto).all()
#     print(produtos)  # Verifique se os campos 'criado_em' e 'atualizado_em' estão nos objetos retornados
#     return produtos

@router.put("/produtos/{produto_id}", response_model=ProdutoResponse)
def update_produto(produto_id: int, produto_update: ProdutoUpdate, db: Session = Depends(get_db)):
    produto = db.query(Produto).filter(Produto.id == produto_id).first()

    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    produto.nome = produto_update.nome
    produto.descricao = produto_update.descricao
    produto.preco = produto_update.preco

    estoque = db.query(Estoque).filter(Estoque.produto_id == produto_id).first()
    if estoque and produto_update.quantidade_estoque is not None:
        estoque.quantidade_atual = produto_update.quantidade_estoque

    if produto_update.categoria_id:
        db.query(ProdutoCategoria).filter(ProdutoCategoria.produto_id == produto_id).delete()
        nova_categoria = ProdutoCategoria(produto_id=produto.id, categoria_id=produto_update.categoria_id)
        db.add(nova_categoria)

    db.commit()
    db.refresh(produto)

    return produto

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