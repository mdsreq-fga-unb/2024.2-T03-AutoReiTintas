from pydantic import BaseModel, HttpUrl
from datetime import datetime

class ProdutoImagemBase(BaseModel):
    ordem: int = 0

class ProdutoImagemCreate(ProdutoImagemBase):
    url_imagem: HttpUrl  

class ProdutoImagemResponse(ProdutoImagemBase):
    id: int
    url_imagem: str 
    criado_em: datetime

    class Config:
        orm_mode = True