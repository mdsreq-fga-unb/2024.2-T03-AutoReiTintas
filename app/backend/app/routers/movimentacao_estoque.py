from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import MovimentacaoEstoque, Estoque
from app.schemas.movimentacao_estoque_schemas import (
    MovimentacaoEstoqueCreate, MovimentacaoEstoqueResponse
)
router = APIRouter()

@router.post("/movimentacao_estoque/", response_model=MovimentacaoEstoqueResponse)
def register_movimentacao_estoque(movimentacao: MovimentacaoEstoqueCreate, db: Session = Depends(get_db)):
    # verify if estoque exists
    estoque = db.query(Estoque).filter(Estoque.produto_id == movimentacao.estoque_id).first()
    if not estoque:
        raise HTTPException(status_code=404, detail="Estoque não encontrado")
    
    # update quantity in estoque
    if movimentacao.tipo_movimentacao == "entrada":
        estoque.quantidade_atual += movimentacao.quantidade
    elif movimentacao.tipo_movimentacao == "saida":
        if estoque.quantidade_atual < movimentacao.quantidade:
            raise HTTPException(status_code=400, detail="Quantidade insuficiente em estoque")
        estoque.quantidade_atual -= movimentacao.quantidade
    else:
        raise HTTPException(status_code=400, detail="Tipo de movimentação inválido")
    
    # create movimentacao_estoque
    nova_mov = MovimentacaoEstoque(
        estoque_id=movimentacao.estoque_id,
        tipo_movimentacao=movimentacao.tipo_movimentacao,
        quantidade=movimentacao.quantidade,
        referencia_id=movimentacao.referencia_id,
        motivo=movimentacao.motivo
    )
    db.add(nova_mov)
    db.commit()
    db.refresh(nova_mov)
    return nova_mov

@router.get("/movimentacao_estoque/{movimentacao_id}", response_model=MovimentacaoEstoqueResponse)
def get_movimentacao_estoque(movimentacao_id: int, db: Session = Depends(get_db)):
    movimentacao = db.query(MovimentacaoEstoque).filter(MovimentacaoEstoque.id == movimentacao_id).first()
    if not movimentacao:
        raise HTTPException(status_code=404, detail="Movimentação de estoque não encontrada")
    return movimentacao

@router.get("/movimentacao_estoque/estoque/{estoque_id}", response_model=list[MovimentacaoEstoqueResponse])
def get_movimentacoes_estoque(estoque_id: int, db: Session = Depends(get_db)):
    movimentacoes = db.query(MovimentacaoEstoque).filter(MovimentacaoEstoque.estoque_id == estoque_id).all()
    return movimentacoes
