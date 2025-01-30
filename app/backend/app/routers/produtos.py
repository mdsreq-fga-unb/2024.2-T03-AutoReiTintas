from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Produto, Estoque
from app.schemas.produto_schemas import ProdutoCreate, ProdutoResponse

router = APIRouter()

@router.post("/produtos/", response_model=ProdutoResponse)
def create_produto(produto: ProdutoCreate, db: Session = Depends(get_db)):
    novo_produto = Produto(
        nome=produto.nome, 
        descricao=produto.descricao, 
        preco=produto.preco
    )
    db.add(novo_produto)
    db.commit()
    db.refresh(novo_produto)

    novo_estoque = Estoque(
        produto_id=novo_produto.id, 
        quantidade_atual=produto.quantidade_inicial
    )
    db.add(novo_estoque)
    db.commit()

    return novo_produto

@router.get("/produtos/", response_model=list[ProdutoResponse])
def get_produtos(db: Session = Depends(get_db)):
    produtos = db.query(Produto).all()
    return produtos

@router.get("/produtos/{produto_id}", response_model=ProdutoResponse)
def get_produto(produto_id: int, db: Session = Depends(get_db)):
    produto = db.query(Produto).filter(Produto.id == produto_id).first()
    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")
    return produto
