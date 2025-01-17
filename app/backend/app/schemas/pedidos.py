# schemas/pedidos.py
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
from decimal import Decimal

class ItemPedidoBase(BaseModel):
    produto_id: int
    quantidade: int
    preco_unitario: Decimal
    desconto: Decimal | None = None

class ItemPedidoCreate(BaseModel):
    produto_id: int
    quantidade: int
    preco_unitario: float
    desconto: Optional[float] = 0


class ItemPedidoResponse(ItemPedidoCreate):
    id: int

    class Config:
        orm_mode = True

class PedidoCreate(BaseModel):
    cliente_id: int
    status_id: int 
    itens: List[ItemPedidoCreate]


class StatusPedidoBase(BaseModel):
    descricao: str

class StatusPedidoCreate(StatusPedidoBase):
    pass

class StatusPedidoResponse(StatusPedidoBase):
    id: int

    class Config:
        orm_mode = True

class PedidoResponse(BaseModel):
    id: int
    cliente_id: int
    status_id: int
    status: StatusPedidoResponse
    criado_em: datetime
    atualizado_em: datetime
    itens: List[ItemPedidoResponse]

    class Config:
        orm_mode = True

class HistoricoStatusPedidoBase(BaseModel):
    pedido_id: int
    status_id: int

class HistoricoStatusPedidoCreate(HistoricoStatusPedidoBase):
    pass

class HistoricoStatusPedidoResponse(HistoricoStatusPedidoBase):
    id: int
    alterado_em: datetime

    class Config:
        orm_mode = True
