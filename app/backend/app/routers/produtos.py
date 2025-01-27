from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Produto
from app.schemas.produto_schemas import ProdutoCreate, ProdutoResponse
from pydantic import BaseModel

router = APIRouter()

class SuccessResponse(BaseModel):
    message: str

@router.post("/produtos/", response_model=ProdutoResponse)
def create_produto(produto: ProdutoCreate, db: Session = Depends(get_db)):
    novo_produto = Produto(nome=produto.nome, descricao=produto.descricao, preco=produto.preco)
    db.add(novo_produto)
    db.commit()
    db.refresh(novo_produto)
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

@router.put("/produtos/{produto_id}", response_model=ProdutoResponse)
def update_produto(produto_id: int, produto: ProdutoCreate, db: Session = Depends(get_db)):
    produto_existente = db.query(Produto).filter(Produto.id == produto_id).first()
    if not produto_existente:
        raise HTTPException(status_code=404, detail="Can't find this product")
    
    produto_existente.nome = produto.nome
    produto_existente.descricao = produto.descricao
    produto_existente.preco = produto.preco
    
    db.commit()
    db.refresh(produto_existente)
    return produto_existente

@router.delete("/api/produtos/{id}")
def delete_produto(id: int, db: Session = Depends(get_db)):
    try:
        produto = db.query(Produto).filter(Produto.id == id).first()
        if not produto:
            raise HTTPException(status_code=404, detail="Produto não encontrado")

        db.delete(produto)
        db.commit()
        
        return {"message": "Produto excluído com sucesso"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Erro ao excluir produto")