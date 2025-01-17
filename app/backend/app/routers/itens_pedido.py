from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import ItemPedido
from app.schemas.pedidos import ItemPedidoResponse, ItemPedidoCreate, ItemPedidoBase

router = APIRouter()

@router.post("/itens_pedido", response_model=ItemPedidoResponse)
def create_item_pedido(item_pedido: ItemPedidoCreate, db: Session = Depends(get_db)):
    novo_item = ItemPedido(
        pedido_id=item_pedido.pedido_id,
        produto_id=item_pedido.produto_id,
        quantidade=item_pedido.quantidade,
        preco_unitario=item_pedido.preco_unitario,
        desconto=item_pedido.desconto
    )
    db.add(novo_item)
    db.commit()
    db.refresh(novo_item)
    return novo_item

@router.get("/itens_pedido/{item_pedido_id}", response_model=ItemPedidoResponse)
def get_item_pedido(item_pedido_id: int, db: Session = Depends(get_db)):
    item_pedido = db.query(ItemPedido).filter(ItemPedido.id == item_pedido_id).first()
    if not item_pedido:
        raise HTTPException(status_code=404, detail="Item do pedido não encontrado")
    return item_pedido

@router.delete("/itens_pedido/{item_pedido_id}", response_model=ItemPedidoResponse)
def delete_item_pedido(item_pedido_id: int, db: Session = Depends(get_db)):
    item_pedido = db.query(ItemPedido).filter(ItemPedido.id == item_pedido_id).first()
    if not item_pedido:
        raise HTTPException(status_code=404, detail="Item do pedido não encontrado")
    db.delete(item_pedido)
    db.commit()
    return item_pedido

@router.patch("/itens_pedido/{item_pedido_id}", response_model=ItemPedidoResponse)
def update_item_pedido(item_pedido_id: int, item_pedido: ItemPedidoBase, db: Session = Depends(get_db)):
    item_pedido_existente = db.query(ItemPedido).filter(ItemPedido.id == item_pedido_id).first()
    if not item_pedido_existente:
        raise HTTPException(status_code=404, detail="Item do pedido não encontrado")
    item_pedido_existente.quantidade = item_pedido.quantidade
    db.commit()
    db.refresh(item_pedido_existente)
    return item_pedido_existente

@router.get("/itens_pedido", response_model=list[ItemPedidoResponse])
def get_all_item_pedidos(db: Session = Depends(get_db)):
    item_pedidos = db.query(ItemPedido).all()
    return item_pedidos

