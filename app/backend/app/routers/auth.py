from fastapi import APIRouter, Depends, HTTPException
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
    #verify if user exist
    usuario = db.query(Usuario).filter(Usuario.email == credenciais.email).first()
    if not usuario or not usuario.verify_password(credenciais.senha):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    # creating access token
    access_token = Authorize.create_access_token(subject=usuario.id)
    return {"access_token": access_token, "usuario_id": usuario.id}
