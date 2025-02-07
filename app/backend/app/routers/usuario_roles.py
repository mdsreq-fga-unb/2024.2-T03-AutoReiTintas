from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import UsuarioRole, Usuario, Role
from app.schemas.usuario_role_schemas import UsuarioRoleCreate, UsuarioRoleResponse

router = APIRouter()

@router.post("/usuario_roles/", response_model=UsuarioRoleResponse)
def associate_role_to_user(usuario_role: UsuarioRoleCreate, db: Session = Depends(get_db)):
    user = db.query(Usuario).filter(Usuario.id == usuario_role.usuario_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    role = db.query(Role).filter(Role.id == usuario_role.role_id).first()
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")

    association = db.query(UsuarioRole).filter(UsuarioRole.usuario_id == usuario_role.usuario_id, UsuarioRole.role_id == usuario_role.role_id).first()
    if association:
        raise HTTPException(status_code=400, detail="Association already exists")

    new_association = UsuarioRole(usuario_id=user.id, role_id=role.id)
    db.add(new_association)
    db.commit()
    db.refresh(new_association)
    return new_association

@router.get("/usuario_roles/{usuario_id}", response_model=UsuarioRoleResponse)
def get_usuario_role(usuario_id: int, db: Session = Depends(get_db)):
    user_role = db.query(UsuarioRole).filter(UsuarioRole.usuario_id == usuario_id).first()
    if not user_role:
        raise HTTPException(status_code=404, detail="Usuário role not found")
    return user_role