# Arquitetura do projeto

## Visão geral
O projeto se baseará na arquitetura em camadas. Essa rquitetura busca identificar partes do sistemas com externalidade maior - as que possuem mais contato com o usuário - e partes com internalidade maior - persistência. Sendo assim, haverão divisões de componentes conforme sua função técnica.

## Camadas principais

1. Dados: possui a responsabilidade de conter as models e o banco de dados.
2. Aplicação: responsável por conter a lógica de negócios da aplicação.
3. Apresentação: contendo a interface do usuário e controle de estados.

## Estrutura das pastas

**frontend**

    frontend/
    ├── src/
    │   ├── components/            # Componentes reutilizáveis
    │   ├── pages/                 # Páginas da aplicação
    │   ├── services/              # Comunicação com APIs (infraestrutura)
    │   ├── contexts/              # Contextos globais (React Context API)
    │   ├── hooks/                 # Hooks personalizados
    │   ├── utils/                 # Funções utilitárias
    │   ├── styles/                # Estilos globais
    │   ├── routes/                # Configuração de rotas
    │   └── core/                  # Ponto central da aplicação (App.js, index.js)
    ├── public/                    # Arquivos estáticos
    ├── tests/                     # Testes automatizados
    ├── config/                    # Configurações gerais (opcional)
    └── package.json               # Configuração do projeto

1. **`components/`**: 
   - Componentes reutilizáveis, como botões, cards e modais.

2. **`pages/`**: 
   - Páginas principais da aplicação, organizadas por rotas.

3. **`services/`**: 
   - Abstração de chamadas a APIs e lógica relacionada à obtenção de dados.

4. **`contexts/`**: 
   - Contextos para gerenciamento de estado global (e.g., autenticação, tema).

5. **`hooks/`**: 
   - Hooks personalizados para encapsular lógica reutilizável.

6. **`utils/`**: 
   - Funções auxiliares (e.g., formatação de datas, debounce).

7. **`styles/`**: 
   - Estilos globais, variáveis e temas.

8. **`routes/`**: 
   - Configuração de rotas e estrutura de navegação.

9. **`core/`**: 
   - Arquivos principais da aplicação, como `App.js` e `index.js`.

10. **`public/`**: 
    - Recursos públicos como o arquivo HTML base e favicons.

11. **`tests/`**: 
    - Estrutura para testes automatizados, divididos por tipo (unitários, integração, e2e).

12. **`config/`**: 
    - Configurações opcionais, como chaves de API, se necessário.


**backend**

   backend/
   ├── |
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
 
1. **`app/`**:
   - Diretório principal da aplicação, onde está todo o código de configuração, rotas e lógica de negócios.

    - **`__init__.py`**: Inicializa a aplicação FastAPI.
    - **`main.py`**: Arquivo principal para inicializar a aplicação FastAPI, configurar rotas e iniciar o servidor.
    - **`config.py`**: Arquivo de configurações, como credenciais de conexão com o banco de dados Supabase (PostgreSQL).

2. **`db/`**:
   - Contém toda a lógica relacionada ao banco de dados, incluindo configuração e definição dos modelos.

    - **`__init__.py`**: Inicializa o módulo db.
    - **`database.py`**: Configura a conexão com o banco de dados, utilizando o SQLAlchemy para se conectar ao Supabase (PostgreSQL).
    - **`models.py`**: Define os modelos do banco de dados utilizando SQLAlchemy. Os modelos representam as tabelas no banco.

3. **`api/`**:
   - Diretório que contém as rotas e a lógica da API.

    - **`__init__.py`**: Inicializa o módulo api.
    - **`users.py`**: Define as rotas relacionadas aos usuários (ex.: criar usuário, obter usuário).
    - **`posts.py`**: Define as rotas relacionadas a posts (ex.: criar post, listar posts).

4. **`services/`**:
   - Contém a lógica de negócios e serviços que manipulam dados e implementam a lógica de aplicação.

    - **`__init__.py`**: Inicializa o módulo services.
    - **`user_service.py`**: Contém funções de negócios para usuários, como criação ou manipulação de dados do usuário.
    - **`post_service.py`**: Contém funções de negócios para posts, como criação ou manipulação de dados de posts.

5. **`schemas/`**:
   - Contém os esquemas Pydantic para validação de dados de entrada e saída.

    - **`__init__.py`**: Inicializa o módulo schemas.
    - **`user_schema.py`**: Define esquemas Pydantic para validar os dados de entrada e saída relacionados aos usuários.
    - **`post_schema.py`**: Define esquemas Pydantic para validar os dados de entrada e saída relacionados aos posts.

6. **`crud/`**:
   - Contém funções de manipulação direta de dados (CRUD - Create, Read, Update, Delete) para interagir com o banco de dados.

    - **`__init__.py`**: Inicializa o módulo crud.
    - **`user_crud.py`**: Contém funções CRUD para manipulação dos dados dos usuários no banco de dados.
    - **`post_crud.py`**: Contém funções CRUD para manipulação dos dados dos posts no banco de dados.

7. **`utils/`**:
   - Contém funções auxiliares para tarefas gerais, como autenticação e outras operações utilitárias.

    - **`__init__.py`**: Inicializa o módulo utils.
    - **`auth.py`**: Contém funções auxiliares de autenticação, como geração e verificação de tokens JWT.

8. **`alembic/`**:
   - Diretório para migrações de banco de dados utilizando Alembic. Contém as versões das migrações e a configuração do Alembic.

    - **`versions/`**: Contém as versões das migrações do banco de dados.
    - **`env.py`**: Arquivo de configuração do Alembic que permite aplicar as migrações de banco de dados.

9. **`requirements.txt`**:
   - Arquivo de dependências que lista as bibliotecas necessárias para o projeto (ex.: FastAPI, SQLAlchemy, Alembic).
