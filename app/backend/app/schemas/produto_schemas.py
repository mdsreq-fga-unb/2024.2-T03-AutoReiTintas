from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProdutoBase(BaseModel):
    nome: str
    descricao: Optional[str] = None
    preco: float

class ProdutoCreate(ProdutoBase):
    quantidade_inicial: int

class ProdutoResponse(ProdutoBase):
    id: int
    criado_em: datetime
    atualizado_em: datetime

    class Config:
        orm_mode = True
