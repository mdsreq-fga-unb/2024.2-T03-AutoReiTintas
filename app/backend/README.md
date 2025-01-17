#  Auto Rei Tintas API

API de gerenciamento de pedidos, construída com **FastAPI**, **SQLAlchemy** e integrada ao banco de dados **Supabase**.

---
## Modelo do Banco de Dados

![banco-modelo](https://i.ibb.co/s186dHY/Capture2.png)

---
##  Funcionalidades

- Criar, listar e deletar pedidos
- Gerenciar itens dos pedidos
- Acompanhamento do status e histórico dos pedidos

---
##  Configuração do Ambiente

### 1. Pré-requisitos

Certifique-se de ter instalado:

- Python 3.10+
- PostgreSQL (se não for usar Supabase diretamente)

### 2. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
### 3. Criar Ambiente Virtual e Instalar Dependências

Crie um ambiente virtual:

``` bash
python -m venv env
source env/bin/activate  # No Windows: .\env\Scripts\activate
```
Instale as depednências

``` bash
pip install -r requirements.txt

```
### 4. Configurar Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis (modifique conforme necessário):

``` env
DATABASE_URL=postgresql://usuario:senha@host:porta/nome_banco
```
---
## Executar o Projeto

1. Execute as migrações do banco de dados:
	``` bash
	alembic upgrade head
	```
2. Inicie a API:

	``` bash
	uvicorn app.main:app --reload
	```
Por padrão, a API estará disponível em `http://127.0.0.1:8000`

---
## Rodar Testes

``` bash
pytest
```

---
## Estrutura do Projeto

``` bash
.
├── app/
│   ├── __init__.py
│   ├── database.py         # Configuração do banco de dados
│   ├── main.py             # Ponto de entrada da aplicação
│   ├── models/             # Modelos do SQLAlchemy
│   │   ├── __init__.py
│   │   └── models.py
│   ├── routers/            # Endpoints da API
│   │   ├── __init__.py
│   │   └── pedidos.py
│   ├── schemas/            # Schemas do Pydantic
│   │   ├── __init__.py
│   │   └── pedidos.py
│   └── tests/              # Testes automatizados
│       ├── __init__.py
│       └── test_pedidos.py
├── .env                    # Variáveis de ambiente (não subir no repositório)
├── .gitignore              # Arquivos ignorados pelo Git
├── requirements.txt        # Dependências do projeto
└── README.md               # Documentação
```

---

## Contribuições

- Faça um fork do projeto.
- Crie uma branch com sua feature: `git checkout -b minha-feature`.
- Faça um commit: `git commit -m 'Adicionei minha feature'`.
- Envie as alterações: `git push origin minha-feature`.
- Abra um pull request.

---

