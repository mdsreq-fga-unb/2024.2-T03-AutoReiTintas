from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import ProdutoCategoria
from app.schemas.produto_categoria_schemas import ProdutoCategoriaCreate, ProdutoCategoriaResponse

router = APIRouter()

@router.post("/produto-categoria", response_model=ProdutoCategoriaResponse)
def create_relacionamento(rel: ProdutoCategoriaCreate, db: Session = Depends(get_db)):
    novo_rel = ProdutoCategoria(produto_id=rel.produto_id, categoria_id=rel.categoria_id)
    db.add(novo_rel)
    db.commit()
    db.refresh(novo_rel)
    return novo_rel

@router.get("/produto-categoria/", response_model=list[ProdutoCategoriaResponse])
def get_relacionamentos(db: Session = Depends(get_db)):
    relacionamentos = db.query(ProdutoCategoria).all()
    return relacionamentos


