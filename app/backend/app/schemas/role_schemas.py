from pydantic import BaseModel

class RoleBase(BaseModel):
    nome: str
    descricao: str | None = None

class RoleCreate(RoleBase):
    pass

class RoleResponse(RoleBase):
    id: int

    class Config:
        orm_mode = True

