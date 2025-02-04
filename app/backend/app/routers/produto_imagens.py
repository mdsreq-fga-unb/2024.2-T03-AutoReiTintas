from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.models import ProdutoImagem, Produto
from app.schemas.produto_imagem_schemas import ProdutoImagemCreate, ProdutoImagemResponse
# from google.oauth2 import service_account  # Exemplo para Google Drive
# from googleapiclient.discovery import build
import uuid
import os

router = APIRouter()

# Configurações (adicione ao .env)
# GOOGLE_CREDENTIALS = os.getenv("GOOGLE_CREDENTIALS_JSON")
# DRIVE_FOLDER_ID = os.getenv("DRIVE_FOLDER_ID")

# Configurar cliente do Google Drive
# credentials = service_account.Credentials.from_service_account_info(
#     GOOGLE_CREDENTIALS,
#     scopes=['https://www.googleapis.com/auth/drive']
# )
# drive_service = build('drive', 'v3', credentials=credentials)

@router.post("/", response_model=ProdutoImagemResponse)
async def adicionar_imagem(
    produto_id: int,
    file: UploadFile = File(...),
    ordem: int = 0,
    db: Session = Depends(get_db)
):
    # Verificar se o produto existe
    produto = db.query(Produto).filter(Produto.id == produto_id).first()
    if not produto:
        raise HTTPException(status_code=404, detail="Produto não encontrado")

    try:
        # Upload para o Google Drive
        file_metadata = {
            'name': f"{uuid.uuid4()}_{file.filename}",
            'parents': [DRIVE_FOLDER_ID]
        }
        
        media = MediaIoBaseUpload(
            io.BytesIO(await file.read()),
            mimetype=file.content_type,
            resumable=True
        )
        
        uploaded_file = drive_service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id, webViewLink'
        ).execute()

        # Tornar o arquivo público (opcional)
        drive_service.permissions().create(
            fileId=uploaded_file['id'],
            body={'type': 'anyone', 'role': 'reader'}
        ).execute()

        # Criar registro no banco
        db_imagem = ProdutoImagem(
            produto_id=produto_id,
            url_imagem=uploaded_file['webViewLink'],
            ordem=ordem
        )
        
        db.add(db_imagem)
        db.commit()
        db.refresh(db_imagem)
        
        return db_imagem

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao fazer upload da imagem: {str(e)}"
        )

@router.delete("/{imagem_id}")
def remover_imagem(imagem_id: int, db: Session = Depends(get_db)):
    imagem = db.query(ProdutoImagem).filter(ProdutoImagem.id == imagem_id).first()
    if not imagem:
        raise HTTPException(status_code=404, detail="Imagem não encontrada")

    try:
        # Extrair o file ID da URL
        file_id = imagem.url_imagem.split('/')[-2]
        
        # Deletar do Google Drive
        drive_service.files().delete(fileId=file_id).execute()
        
        # Remover do banco
        db.delete(imagem)
        db.commit()
        
        return {"message": "Imagem removida com sucesso"}

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao remover imagem: {str(e)}"
        )