from fastapi import FastAPI
from app.routers import (
    usuarios, roles, usuario_roles, produtos, categorias, 
    produto_categoria, estoque, movimentacao_estoque, pedidos,
    itens_pedido, auth, produto_imagens
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi_jwt_auth import AuthJWT
from pydantic import BaseModel
import os 

class configJWT(BaseModel):
    AuthJWT_secret_key: str = os.getenv("JWT_SECRET_KEY", "default_secret_key")

@AuthJWT.load_config
def get_config():
    return configJWT()

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
     allow_methods=["*"],
    allow_headers=["*"],  
)

app.include_router(auth.router)
app.include_router(usuarios.router, prefix="/api", tags=["Usuários"])
app.include_router(roles.router, prefix="/api", tags=["Roles"])
app.include_router(usuario_roles.router, prefix="/api", tags=["Usuario Roles"])
app.include_router(produtos.router, prefix="/api", tags=["Produtos"])
app.include_router(categorias.router, prefix="/api", tags=["Categorias"])
app.include_router(produto_categoria.router, prefix="/api", tags=["Produto-Categoria"])
app.include_router(estoque.router, prefix="/api", tags=["Estoque"])
app.include_router(movimentacao_estoque.router, prefix="/api", tags=["Movimentação Estoque"])
app.include_router(pedidos.router, prefix="/api", tags=["Pedidos"])
app.include_router(itens_pedido.router, prefix="/api", tags=["Itens Pedido"])
app.include_router(produto_imagens.router, prefix="/api", tags=["Pedidos Imagens"])

@app.get("/")
def root():
    return {"message": "API Working!"}

