from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, aliased
from app.database import get_db
from app.models.models import ProdutoCategoria, Categoria
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

@router.get("/produto-categoria/{produto_id}", response_model=ProdutoCategoriaResponse)
def get_categoria_by_produto_id(produto_id: int, db: Session = Depends(get_db)):
    rel_categoria = db.query(ProdutoCategoria, Categoria.nome).join(Categoria, ProdutoCategoria.categoria_id == Categoria.id).filter(ProdutoCategoria.produto_id == produto_id).first()
    
    if not rel_categoria:
        raise HTTPException(status_code=404, detail="Produto não encontrado ou sem categoria associada")

    return ProdutoCategoriaResponse(produto_id=produto_id, categoria_nome=rel_categoria.nome)

