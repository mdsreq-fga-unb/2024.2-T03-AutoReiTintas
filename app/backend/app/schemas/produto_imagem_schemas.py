from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProdutoImagemBase(BaseModel):
    ordem: int = 0

class ProdutoImagemCreate(ProdutoImagemBase):
    url_imagem: str  

class ProdutoImagemResponse(ProdutoImagemBase):
    id: int
    url_imagem: str 
    criado_em: Optional[datetime] = None

    class Config:
        orm_mode = True