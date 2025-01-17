from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Estoque
from app.schemas.estoque_schemas import EstoqueCreate, EstoqueResponse

router = APIRouter()

@router.post("/estoque/", response_model=EstoqueResponse)
def create_estoque(estoque: EstoqueCreate, db: Session = Depends(get_db)):
    novo_estoque = Estoque(produto_id=estoque.produto_id, quantidade_atual=estoque.quantidade_atual)
    db.add(novo_estoque)
    db.commit()
    db.refresh(novo_estoque)
    return novo_estoque

@router.get("/estoque/{produto_id}", response_model=EstoqueResponse)
def get_estoque(produto_id: int, db: Session = Depends(get_db)):
    estoque = db.query(Estoque).filter(Estoque.produto_id == produto_id).first()
    if not estoque:
        raise HTTPException(status_code=404, detail="Estoque não encontrado")
    return estoque

@router.patch("/estoque/{produto_id}", response_model=EstoqueResponse)
def update_estoque(produto_id: int, quantidade_atual: int, db: Session = Depends(get_db)):
    estoque = db.query(Estoque).filter(Estoque.produto_id == produto_id).first()
    if not estoque:
        raise HTTPException(status_code=404, detail="Estoque não encontrado")
    estoque.quantidade_atual = quantidade_atual
    db.commit()
    db.refresh(estoque)
    return estoque
