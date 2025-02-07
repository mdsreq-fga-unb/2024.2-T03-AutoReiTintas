from sqlalchemy import Column, Integer, String, ForeignKey, Numeric, TIMESTAMP, Text
from sqlalchemy.orm import relationship
from app.database import Base
import datetime
from passlib.hash import bcrypt
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from passlib.hash import bcrypt
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    senha_hash = Column(String(255), nullable=False)
    telefone = Column(String(15), nullable=False)
    criado_em = Column(DateTime(timezone=True), server_default=func.now())
    atualizado_em = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    roles = relationship(
        "UsuarioRole",
        back_populates="usuario",
        cascade="all, delete-orphan",
        passive_deletes=True
    )

    def verify_password(self, senha: str) -> bool:
        return bcrypt.verify(senha, self.senha_hash)

    def set_password(self, senha: str):
        self.senha_hash = bcrypt.hash(senha)

class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), unique=True, nullable=False)
    descricao = Column(Text, nullable=True)

    usuarios = relationship("UsuarioRole", back_populates="role")

class UsuarioRole(Base):
    __tablename__ = "usuario_role"
    usuario_id = Column(Integer, ForeignKey("usuarios.id"), primary_key=True)
    role_id = Column(Integer, ForeignKey("roles.id"), primary_key=True)

    usuario = relationship("Usuario", back_populates="roles")
    role = relationship("Role", back_populates="usuarios")

class ProdutoImagem(Base):
    __tablename__ = "produto_imagens"
    
    id = Column(Integer, primary_key=True, index=True)
    produto_id = Column(Integer, ForeignKey("produtos.id", ondelete="CASCADE"), nullable=False)
    url_imagem = Column(String(500), nullable=False)  
    ordem = Column(Integer, default=0)
    criado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow)

    produto = relationship("Produto", back_populates="imagens")

class Produto(Base):
    __tablename__ = "produtos"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    codigo = Column(Integer, unique=True, nullable=True)
    descricao = Column(Text, nullable=True)
    preco = Column(Numeric(10, 2), nullable=False)
    criado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow)
    atualizado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    categorias = relationship("ProdutoCategoria", back_populates="produto")
    estoque = relationship("Estoque", uselist=False, back_populates="produto")
    pedidos = relationship("ItemPedido", back_populates="produto")
    
    imagens = relationship("ProdutoImagem", back_populates="produto", cascade="all, delete-orphan")

class Categoria(Base):
    __tablename__ = "categorias"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    categoria_pai_id = Column(
        Integer, 
        ForeignKey('categorias.id', ondelete="SET NULL"), 
        nullable=True
    )

    subcategorias = relationship(
        "Categoria",
        back_populates="categoria_pai",
        remote_side=[categoria_pai_id],  
        cascade="all, delete-orphan",
        single_parent=True  
    )
    
    categoria_pai = relationship(
        "Categoria", 
        back_populates="subcategorias",
        remote_side=[id]
    )

    produtos = relationship("ProdutoCategoria", back_populates="categoria")

class ProdutoCategoria(Base):
    __tablename__ = "produto_categoria"
    produto_id = Column(Integer, ForeignKey("produtos.id", ondelete="CASCADE"), primary_key=True)
    categoria_id = Column(Integer, ForeignKey("categorias.id", ondelete="CASCADE"), primary_key=True)

    produto = relationship("Produto", back_populates="categorias")
    categoria = relationship("Categoria", back_populates="produtos")

class Estoque(Base):
    __tablename__ = "estoque"
    id = Column(Integer, primary_key=True, index=True)
    produto_id = Column(Integer, ForeignKey("produtos.id", ondelete="CASCADE"), nullable=False)
    quantidade_atual = Column(Integer, nullable=False)
    atualizado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    produto = relationship("Produto", back_populates="estoque")
    movimentacoes = relationship("MovimentacaoEstoque", back_populates="estoque")

class MovimentacaoEstoque(Base):
    __tablename__ = "movimentacao_estoque"

    id = Column(Integer, primary_key=True, index=True)
    estoque_id = Column(Integer, ForeignKey("estoque.id", ondelete="CASCADE"), nullable=False)
    tipo_movimentacao = Column(String(255), nullable=False)
    quantidade = Column(Integer, nullable=False)
    referencia_id = Column(Integer, nullable=True)
    motivo = Column(Text, nullable=True)
    criado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow)

    estoque = relationship("Estoque", back_populates="movimentacoes")

class Pedido(Base):
    __tablename__ = "pedidos"

    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("usuarios.id", ondelete="CASCADE"), nullable=False)
    status_id = Column(Integer, ForeignKey("status_pedido.id", ondelete="CASCADE"), nullable=False)
    criado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow)
    atualizado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    itens = relationship("ItemPedido", back_populates="pedido")
    status = relationship("StatusPedido", back_populates="pedidos") 
    historico_status = relationship("HistoricoStatusPedido", back_populates="pedido")

class ItemPedido(Base):
    __tablename__ = "itens_pedido"

    id = Column(Integer, primary_key=True, index=True)
    pedido_id = Column(Integer, ForeignKey("pedidos.id", ondelete="CASCADE"), nullable=False)
    produto_id = Column(Integer, ForeignKey("produtos.id", ondelete="CASCADE"), nullable=False)
    quantidade = Column(Integer, nullable=False)
    preco_unitario = Column(Numeric(10, 2), nullable=False)
    desconto = Column(Numeric(10, 2), nullable=True)

    pedido = relationship("Pedido", back_populates="itens")
    produto = relationship("Produto", back_populates="pedidos")

class StatusPedido(Base):
    __tablename__ = "status_pedido"

    id = Column(Integer, primary_key=True, index=True)
    descricao = Column(Text, nullable=False)

    pedidos = relationship("Pedido", back_populates="status")
    historico = relationship("HistoricoStatusPedido", back_populates="status")

class HistoricoStatusPedido(Base):
    __tablename__ = "historico_status_pedido"

    id = Column(Integer, primary_key=True, index=True)
    pedido_id = Column(Integer, ForeignKey("pedidos.id", ondelete="CASCADE"), nullable=False)
    status_id = Column(Integer, ForeignKey("status_pedido.id", ondelete="CASCADE"), nullable=False)
    alterado_em = Column(TIMESTAMP, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    pedido = relationship("Pedido", back_populates="historico_status")
    status = relationship("StatusPedido", back_populates="historico")
