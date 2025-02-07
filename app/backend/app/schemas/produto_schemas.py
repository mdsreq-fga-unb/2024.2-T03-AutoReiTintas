# schemas/produto_schemas.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List
from app.schemas.produto_imagem_schemas import ProdutoImagemResponse

class CategoriaResponse(BaseModel):
    id: int
    nome: str

class ProdutoBase(BaseModel):
    nome: str
    descricao: Optional[str] = None
    preco: float
    codigo: Optional[int] = None

class ProdutoCreate(ProdutoBase):
    quantidade_inicial: int
    categoria_id: int

class ProdutoUpdate(BaseModel):
    nome: Optional[str] = None
    descricao: Optional[str] = None
    preco: Optional[float] = None
    quantidade_estoque: Optional[int] = None
    categoria_id: Optional[int] = None
    codigo: Optional[int] = None

class ProdutoResponse(ProdutoBase):
    id: int
    criado_em: Optional[datetime] = None
    atualizado_em: Optional[datetime] = None
    imagens: List[ProdutoImagemResponse] = []
    quantidade_estoque: int
    categorias: List[CategoriaResponse] = []

    class Config:
        orm_mode = True
