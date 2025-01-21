from pydantic import BaseModel
from datetime import datetime

class MovimentacaoEstoqueBase(BaseModel):
    estoque_id: int
    tipo_movimentacao: str
    quantidade: int
    referencia_id: int | None = None
    motivo: str | None = None

class MovimentacaoEstoqueCreate(MovimentacaoEstoqueBase):
    pass

class MovimentacaoEstoqueResponse(MovimentacaoEstoqueBase):
    id: int
    criado_em: datetime

    class Config:
        orm_mode = True
