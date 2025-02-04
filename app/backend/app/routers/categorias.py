from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Categoria
from app.schemas.categoria_schemas import CategoriaCreate, CategoriaResponse

router = APIRouter()

@router.post("/categorias", response_model=CategoriaResponse)
def create_categoria(categoria: CategoriaCreate, db: Session = Depends(get_db)):
    if categoria.categoria_pai_id is not None:
        categoria_pai = db.query(Categoria).filter(Categoria.id == categoria.categoria_pai_id).first()
        if not categoria_pai:
            raise HTTPException(status_code=400, detail="Categoria pai não encontrada")

    nova_categoria = Categoria(
        nome=categoria.nome, 
        categoria_pai_id=categoria.categoria_pai_id if categoria.categoria_pai_id else None
    )
    db.add(nova_categoria)
    db.commit()
    db.refresh(nova_categoria)
    return nova_categoria

@router.get("/categorias/{categoria_id}", response_model=CategoriaResponse)
def get_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(Categoria).filter(Categoria.id == categoria_id).first()
    if not categoria:
        raise HTTPException(status_code=404, detail="Categoria não encontrada")
    return categoria

@router.get("/categorias/", response_model=list[CategoriaResponse])
def get_categorias(db: Session = Depends(get_db)):
    categorias = db.query(Categoria).all()
    return categorias
