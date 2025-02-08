from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from app.models.models import Usuario, UsuarioRole
from app.schemas.auth import LoginSchema, LoginResponse
from app.schemas.usuario_schemas import UsuarioCreate, UsuarioResponse
from app.routers.usuarios import create_usuario
from app.database import get_db

router = APIRouter()

@router.post("/auth/login", response_model=LoginResponse)
def login(
    credenciais: LoginSchema, 
    db: Session = Depends(get_db), 
    Authorize: AuthJWT = Depends()
):
    usuario = db.query(Usuario).filter(Usuario.email == credenciais.email).first()
    
    if not usuario or not usuario.verify_password(credenciais.senha):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciais inválidas",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = Authorize.create_access_token(subject=usuario.id, expires_time=3600)
    return {
        "access_token": access_token,
        "token_type": "bearer", 
        "usuario_id": usuario.id
    }

@router.post("/auth/register", response_model=UsuarioResponse)
def register_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    db_usuario = db.query(Usuario).filter(Usuario.email == usuario.email).first()
    if db_usuario:
        raise HTTPException(status_code=400, detail="Email already exists")
    
    novo_usuario = Usuario(
        nome=usuario.nome,
        email=usuario.email,
        telefone=usuario.telefone
    )
    novo_usuario.set_password(usuario.senha)
    
    db.add(novo_usuario)
    db.flush() 

    new_role = UsuarioRole(usuario_id=novo_usuario.id, role_id=2)
    db.add(new_role)
    
    db.commit()
    db.refresh(novo_usuario)
    
    return UsuarioResponse(
        id=novo_usuario.id,
        nome=novo_usuario.nome,
        email=novo_usuario.email,
        telefone=novo_usuario.telefone,
        criado_em=novo_usuario.criado_em,
        atualizado_em=novo_usuario.atualizado_em
    )