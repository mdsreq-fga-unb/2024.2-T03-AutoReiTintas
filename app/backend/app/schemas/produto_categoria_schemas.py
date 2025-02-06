from pydantic import BaseModel

class ProdutoCategoriaBase(BaseModel):
    produto_id: int
    categoria_id: int

class ProdutoCategoriaCreate(ProdutoCategoriaBase):
    pass

class ProdutoCategoriaResponse(BaseModel):
    produto_id: int
    categoria_nome: str

    class Config:
        orm_mode = True