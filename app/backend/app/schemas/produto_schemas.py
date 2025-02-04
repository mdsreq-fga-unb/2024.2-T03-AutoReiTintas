from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from app.schemas.produto_imagem_schemas import ProdutoImagemResponse

class ProdutoBase(BaseModel):
    nome: str
    descricao: Optional[str] = None
    preco: float

class ProdutoCreate(ProdutoBase):
    quantidade_inicial: int
    categoria_id: int

class ProdutoResponse(ProdutoBase):
    id: int
    criado_em: datetime
    atualizado_em: datetime
    imagens: list[ProdutoImagemResponse] = []

    class Config:
        orm_mode = True
