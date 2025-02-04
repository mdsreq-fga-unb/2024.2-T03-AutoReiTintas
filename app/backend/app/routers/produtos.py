from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.database import get_db
from app.models.models import Produto, Estoque, ProdutoCategoria, Categoria, ProdutoImagem
from app.schemas.produto_schemas import ProdutoCreate, ProdutoResponse

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

    novo_estoque = Estoque(
        produto_id=novo_produto.id,
        quantidade_atual=produto.quantidade_inicial
    )
    db.add(novo_estoque)

    produto_categoria = ProdutoCategoria(
        produto_id=novo_produto.id,
        categoria_id=produto.categoria_id
    )
    db.add(produto_categoria)

    db.commit()
    db.refresh(novo_produto)

    return novo_produto

@router.get("/produtos/{produto_id}", response_model=ProdutoResponse)
def get_produtos(db: Session = Depends(get_db)):
    produtos = db.query(Produto).all()
    produtos_formatados = []

    for produto in produtos:
        estoque = db.query(Estoque).filter(Estoque.produto_id == produto.id).first()
        quantidade_estoque = estoque.quantidade_atual if estoque else 0

        categorias = db.query(Categoria).join(ProdutoCategoria, ProdutoCategoria.categoria_id == Categoria.id)\
            .filter(ProdutoCategoria.produto_id == produto.id).all()

        imagens = db.query(ProdutoImagem.url_imagem).filter(ProdutoImagem.produto_id == produto.id).all()
        imagens = [img.url_imagem for img in imagens]

        produtos_formatados.append({
            "id": produto.id,
            "nome": produto.nome,
            "descricao": produto.descricao,
            "preco": produto.preco,
            "quantidade_estoque": quantidade_estoque,
            "categorias": [{"id": cat.id, "nome": cat.nome} for cat in categorias],
            "imagens": imagens
        })

    return produtos_formatados

@router.get("/produtos/", response_model=list[ProdutoResponse])
def get_produtos(db: Session = Depends(get_db)):
    # Busca todos os produtos
    produtos = db.query(Produto).all()
    produtos_formatados = []

    for produto in produtos:
        # Buscar o estoque relacionado ao produto
        estoque = db.query(Estoque).filter(Estoque.produto_id == produto.id).first()
        quantidade_estoque = estoque.quantidade_atual if estoque else 0

        # Buscar as categorias relacionadas ao produto
        categorias = db.query(Categoria).join(ProdutoCategoria, ProdutoCategoria.categoria_id == Categoria.id)\
            .filter(ProdutoCategoria.produto_id == produto.id).all()

        # Buscar as imagens do produto
        imagens = db.query(ProdutoImagem.url_imagem).filter(ProdutoImagem.produto_id == produto.id).all()
        imagens = [img.url_imagem for img in imagens]

        # Adiciona o produto formatado à lista
        produtos_formatados.append({
            "id": produto.id,
            "nome": produto.nome,
            "descricao": produto.descricao,
            "preco": produto.preco,
            "quantidade_estoque": quantidade_estoque,
            "categorias": [{"id": cat.id, "nome": cat.nome} for cat in categorias],
            "imagens": imagens
        })

    return produtos_formatados
