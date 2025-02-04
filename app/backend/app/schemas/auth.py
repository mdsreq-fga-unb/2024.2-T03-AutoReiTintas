from pydantic import BaseModel

class LoginSchema(BaseModel):
    email: str
    senha: str

class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    usuario_id: int

    class Config:
        min_anystr_length = 1
