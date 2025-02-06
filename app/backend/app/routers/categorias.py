from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Categoria
from app.schemas.categoria_schemas import (
    CategoriaCreate, 
    CategoriaResponse,
    CategoriaUpdate,
    CategoriaTreeResponse
)

router = APIRouter()

@router.post("/categorias/", 
            response_model=CategoriaResponse,
            status_code=status.HTTP_201_CREATED)
def create_categoria(categoria: CategoriaCreate, db: Session = Depends(get_db)):
    if categoria.categoria_pai_id is not None:
        categoria_pai = db.query(Categoria).get(categoria.categoria_pai_id)
        if not categoria_pai:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Categoria pai não encontrada"
            )
    
    nova_categoria = Categoria(
        nome=categoria.nome,
        categoria_pai_id=categoria.categoria_pai_id
    )
    
    try:
        db.add(nova_categoria)
        db.commit()
        db.refresh(nova_categoria)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao criar categoria: {str(e)}"
        )
    
    return nova_categoria

@router.get("/categorias/{categoria_id}", response_model=CategoriaTreeResponse)
def get_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(Categoria).get(categoria_id)
    if not categoria:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Categoria não encontrada"
        )
    
    return build_category_tree(categoria)

@router.get("/categorias/", response_model=list[CategoriaTreeResponse])
def get_categorias(db: Session = Depends(get_db)):
    categorias_raiz = db.query(Categoria).filter(
        Categoria.categoria_pai_id == None
    ).all()
    
    return [build_category_tree(c) for c in categorias_raiz]

@router.put("/categorias/{categoria_id}", response_model=CategoriaResponse)
def update_categoria(
    categoria_id: int,
    categoria_data: CategoriaUpdate,
    db: Session = Depends(get_db)
):
    categoria = db.query(Categoria).get(categoria_id)
    if not categoria:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Categoria não encontrada"
        )
    
    if categoria_data.categoria_pai_id is not None:
        nova_pai = db.query(Categoria).get(categoria_data.categoria_pai_id)
        if not nova_pai:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Nova categoria pai não encontrada"
            )
        
        current = nova_pai
        while current.categoria_pai_id is not None:
            if current.categoria_pai_id == categoria_id:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Criação de loop hierárquico não permitida"
                )
            current = db.query(Categoria).get(current.categoria_pai_id)
    
    for key, value in categoria_data.dict(exclude_unset=True).items():
        setattr(categoria, key, value)
    
    try:
        db.commit()
        db.refresh(categoria)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao atualizar categoria: {str(e)}"
        )
    
    return categoria

def build_category_tree(categoria: Categoria):
    return {
        "id": categoria.id,
        "nome": categoria.nome,
        "categoria_pai_id": categoria.categoria_pai_id,
        "subcategorias": [
            build_category_tree(subcategoria) 
            for subcategoria in sorted(categoria.subcategorias, key=lambda x: x.nome)
        ]
    }