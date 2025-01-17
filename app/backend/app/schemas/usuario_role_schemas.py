from pydantic import BaseModel

class UsuarioRoleCreate(BaseModel):
    usuario_id: int
    role_id: int

class UsuarioRoleResponse(BaseModel):
    usuario_id: int
    role_id: int

    class Config:
        orm_mode = True

