from pydantic import BaseModel
from datetime import datetime

class EstoqueBase(BaseModel):
    produto_id: int
    quantidade_atual: int

class EstoqueCreate(EstoqueBase):
    pass

class EstoqueResponse(EstoqueBase):
    id: int
    atualizado_em: datetime

    class Config:
        orm_mode = True

