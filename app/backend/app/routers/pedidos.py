from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from app.database import get_db
from app.models.models import Pedido, ItemPedido, StatusPedido, HistoricoStatusPedido
from app.schemas.pedidos import PedidoCreate, PedidoResponse, ItemPedidoCreate, StatusPedidoResponse, StatusPedidoCreate, HistoricoStatusPedidoResponse

router = APIRouter()

# routes to create, get, delete and update pedidos
@router.post("/pedidos/", response_model=PedidoResponse)
def create_pedido(pedido: PedidoCreate, db: Session = Depends(get_db)):
    status = db.query(StatusPedido).filter(StatusPedido.id == pedido.status_id).first()
    if not status:
        raise HTTPException(status_code=404, detail="Status não encontrado")

    novo_pedido = Pedido(
        cliente_id=pedido.cliente_id,
        status_id=pedido.status_id,
    )
    db.add(novo_pedido)
    db.commit()
    db.refresh(novo_pedido)

    for item_data in pedido.itens:
        item = ItemPedido(
            pedido_id=novo_pedido.id,
            produto_id=item_data.produto_id,
            quantidade=item_data.quantidade,
            preco_unitario=item_data.preco_unitario,
            desconto=item_data.desconto,
        )
        db.add(item)

    historico = HistoricoStatusPedido(
        pedido_id=novo_pedido.id,
        status_id=pedido.status_id,
    )
    db.add(historico)

    db.commit()
    db.refresh(novo_pedido)
    return novo_pedido


@router.get("/pedidos/", response_model=list[PedidoResponse])
def get_pedidos(db: Session = Depends(get_db)):
    pedidos = db.query(Pedido).all()
    return pedidos


@router.get("/pedidos/{pedido_id}", response_model=PedidoResponse)
async def get_pedido(pedido_id: int, db: Session = Depends(get_db)):
    pedido = db.query(Pedido).options(
        joinedload(Pedido.status),
        joinedload(Pedido.itens)
    ).filter(Pedido.id == pedido_id).first()
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    return pedido


@router.delete("/pedidos/{pedido_id}", response_model=PedidoResponse)
def delete_pedido(pedido_id: int, db: Session = Depends(get_db)):
    pedido = db.query(Pedido).filter(Pedido.id == pedido_id).first()
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    db.delete(pedido)
    db.commit()
    return pedido

# routes to status_pedido and historico_status_pedido
@router.get("/status-pedido/", response_model=list[StatusPedidoResponse])
def list_status_pedido(db: Session = Depends(get_db)):
    status = db.query(StatusPedido).all()
    return status

@router.get("/status-pedido/{status_id}", response_model=StatusPedidoResponse)
def get_status_pedido(status_id: int, db: Session = Depends(get_db)):
    status = db.query(StatusPedido).filter(StatusPedido.id == status_id).first()
    if not status:
        raise HTTPException(status_code=404, detail="Status não encontrado")
    return status

@router.get("/historico-status-pedido/", response_model=list[HistoricoStatusPedidoResponse])
def list_historico_status_pedido(db: Session = Depends(get_db)):
    historico = db.query(HistoricoStatusPedido).all()
    return historico

@router.get("/historico-status-pedido/{historico_id}", response_model=HistoricoStatusPedidoResponse)
def get_historico_status_pedido(historico_id: int, db: Session = Depends(get_db)):
    historico = db.query(HistoricoStatusPedido).filter(HistoricoStatusPedido.id == historico_id).first()
    if not historico:
        raise HTTPException(status_code=404, detail="Historico não encontrado")
    return historico

@router.post("/status-pedido/", response_model=StatusPedidoResponse)
def create_status_pedido(status: StatusPedidoCreate, db: Session = Depends(get_db)):
    novo_status = StatusPedido(
        descricao=status.descricao,
    )
    db.add(novo_status)
    db.commit()
    db.refresh(novo_status)
    return novo_status

@router.delete("/status-pedido/{status_id}", response_model=StatusPedidoResponse)
def delete_status_pedido(status_id: int, db: Session = Depends(get_db)):
    status = db.query(StatusPedido).filter(StatusPedido.id == status_id).first()
    if not status:
        raise HTTPException(status_code=404, detail="Status não encontrado")
    db.delete(status)
    db.commit()
    return status


