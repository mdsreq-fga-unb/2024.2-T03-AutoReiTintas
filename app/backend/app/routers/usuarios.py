from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Usuario
from app.schemas.usuario_schemas import UsuarioCreate, UsuarioResponse, UsuarioUpdate

router = APIRouter()

@router.post("/usuarios/", response_model=UsuarioResponse)
def create_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    db_usuario = db.query(Usuario).filter(Usuario.email == usuario.email).first()
    if db_usuario:
        raise HTTPException(status_code=400, detail="Email already exists")

    novo_usuario = Usuario(nome=usuario.nome, 
                           email=usuario.email, 
                           telefone=usuario.telefone)
    
    novo_usuario.set_password(usuario.senha)

    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)
    return novo_usuario


@router.get("/usuarios/{usuario_id}", response_model=UsuarioResponse)
def get_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario not found")
    return usuario  

@router.get("/usuarios/", response_model=list[UsuarioResponse])
def get_all_usuarios(db: Session = Depends(get_db)):
    usuarios = db.query(Usuario).all()
    return usuarios

@router.put("/usuarios/{usuario_id}", response_model=UsuarioResponse)
def update_usuario(usuario_id: int, usuario_update: UsuarioUpdate, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()

    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    if usuario_update.email and usuario_update.email != usuario.email:
        db_usuario = db.query(Usuario).filter(Usuario.email == usuario_update.email).first()
        if db_usuario:
            raise HTTPException(status_code=400, detail="Email já em uso")

    if usuario_update.nome:
        usuario.nome = usuario_update.nome
    if usuario_update.email:
        usuario.email = usuario_update.email
    if usuario_update.telefone:
        usuario.telefone = usuario_update.telefone
    if usuario_update.senha:
        usuario.set_password(usuario_update.senha)

    db.commit()
    db.refresh(usuario)

    return UsuarioResponse(
        id=usuario.id,
        nome=usuario.nome,
        email=usuario.email,
        telefone=usuario.telefone,
        criado_em=usuario.criado_em,
        atualizado_em=usuario.atualizado_em
    )

@router.delete("/usuarios/{usuario_id}", status_code=204)
def delete_usuario(usuario_id: int, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.id == usuario_id).first()

    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    db.delete(usuario)
    db.commit()

    return {"message": "Usuário excluído com sucesso"}
