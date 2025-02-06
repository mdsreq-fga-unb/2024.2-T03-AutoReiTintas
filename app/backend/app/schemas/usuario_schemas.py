from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UsuarioBase(BaseModel):
    nome: str
    email: str
    telefone: str

class UsuarioCreate(UsuarioBase):
    senha: str

class UsuarioResponse(UsuarioBase):
    id: int
    criado_em: datetime
    atualizado_em: datetime

    class Config:
        orm_mode = True

class UsuarioUpdate(BaseModel):
    nome: Optional[str] = None
    email: Optional[str] = None
    telefone: Optional[str] = None
    senha: Optional[str] = None

    class Config:
        orm_mode = True

