from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from app.models.models import Usuario
from app.schemas.auth import LoginSchema, LoginResponse
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
