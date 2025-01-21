from pydantic import BaseModel
from typing import Optional

class CategoriaBase(BaseModel):
    nome: str
    categoria_pai_id: Optional[int] = None

class CategoriaCreate(CategoriaBase):
    pass

class CategoriaResponse(CategoriaBase):
    id: int
    
    class Config:
        orm_mode = True
