from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Usuario
from app.schemas.usuario_schemas import UsuarioCreate, UsuarioResponse

router = APIRouter()

@router.post("/usuarios/", response_model=UsuarioResponse)
def create_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    # verify if email already exists
    db_usuario = db.query(Usuario).filter(Usuario.email == usuario.email).first()
    if db_usuario:
        raise HTTPException(status_code=400, detail="Email already exists")

    novo_usuario = Usuario(nome=usuario.nome, 
                           email=usuario.email, 
                           telefone=usuario.telefone, 
                           senha_hash=usuario.senha # apply hash to password
                           )
    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)
    return novo_usuario

@router.get("/usuarios/{usuario_id}", response_model=list[UsuarioResponse])
def get_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario not found")
    return usuario

@router.get("/usuarios/", response_model=list[UsuarioResponse])
def get_all_usuarios(db: Session = Depends(get_db)):
    usuarios = db.query(Usuario).all()
    return usuarios

