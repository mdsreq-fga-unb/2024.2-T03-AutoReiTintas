# schemas/categoria_schemas.py
from pydantic import BaseModel
from typing import List, Optional

class CategoriaBase(BaseModel):
    nome: str
    categoria_pai_id: Optional[int] = None

class CategoriaCreate(CategoriaBase):
    pass

class CategoriaUpdate(CategoriaBase):
    pass

class CategoriaResponse(CategoriaBase):
    id: int
    
    class Config:
        orm_mode = True

class CategoriaTreeResponse(CategoriaResponse):
    subcategorias: List['CategoriaTreeResponse'] = []

# Resolve a referência circular
CategoriaTreeResponse.update_forward_refs()