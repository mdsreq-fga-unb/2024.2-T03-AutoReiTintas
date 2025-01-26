from fastapi import FastAPI
from app.routers import (
    usuarios, roles, usuario_roles, produtos, categorias, 
    produto_categoria, estoque, movimentacao_estoque, pedidos,
    itens_pedido
)
app = FastAPI()

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

@app.get("/")
def root():
    return {"message": "Hello World! It's working!"}

