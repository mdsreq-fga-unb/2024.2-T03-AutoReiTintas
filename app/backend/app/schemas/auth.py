from pydantic import BaseModel

class LoginSchema(BaseModel):
    email: str
    senha: str

class LoginResponse(BaseModel):
    access_token: str
    usuario_id: int
