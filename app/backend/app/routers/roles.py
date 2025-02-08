from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import Role
from app.schemas.role_schemas import RoleCreate, RoleResponse

router = APIRouter()

@router.post("/roles/", response_model=RoleResponse)
def create_role(role: RoleCreate, db: Session = Depends(get_db)):
    db_role = db.query(Role).filter(Role.nome == role.nome).first()
    if db_role:
        raise HTTPException(status_code=400, detail="Role already exists")
    novo_role = Role(nome=role.nome, descricao=role.descricao)
    db.add(novo_role)
    db.commit()
    db.refresh(novo_role)
    return novo_role

@router.get("/roles/{role_id}", response_model=RoleResponse)
def get_role(role_id: int, db: Session = Depends(get_db)):
    role = db.query(Role).filter(Role.id == role_id).first()
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")
    return role

@router.get("/roles/", response_model=list[RoleResponse])
def list_roles(db: Session = Depends(get_db)):
    roles = db.query(Role).all()
    return roles

