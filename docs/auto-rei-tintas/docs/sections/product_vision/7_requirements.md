# **Requisitos de Software**

## Lista de Requisitos Funcionais

Os Requisitos Funcionais especificam as funcionalidades e serviços que o sistema de catálogo da auto rei tintas deve fornecer

**RF01** - **Registrar usuários:** Permitir o cadastro de novos clientes.

**RF02** - **Atualizar usuários:** Permitir a atualização das informações dos perfis dos clientes.

**RF03 - Exclusão de usuário:** O usuário deve ter a opção de exclusão de dados.

**RF04** - **Login de usuário:** O sistema deve permitir a autenticação para usuários.

**RF05** - **Login de gestor:** O sistema deve permitir a autenticação para gestores com cargos para edição do catálogo.

**RF06** - **Atualizar produtos:** O sistema deve permitir que os gestores criem, alterem e excluam produtos.

**RF07** - **Administração de roles**: O usuário administrador deve ter a opção de criar, alterar, e excluir gestores para controle de estoque.

**RF08** - **Gerenciamento de carrinho:** Permitir que clientes adicionem produtos ao carrinho de compras e permitir a remoção ou modificação das 
quantidades dos produtos no carrinho.

**RF09** - **Redirecionamento de compra:** redirecionamento para o atendimento via WhatsApp

**RF10** - **Navegação sem o login:** permitir com que os usuários naveguem e montem seus carrinhos de compra nem a necessidade de login no site.

**RF11** - **Avaliação da venda e produto:** o usuário poderá avaliar como foi a venda e o produto por meio do site.

**RF12** - **Consultar pedidos:** Permitir que os clientes _logados_ consultem o histórico de pedidos realizados.

**RF13** - **Gerar relatórios de vendas:** Permitir a geração de relatórios básicos sobre produtos vendidos e tendências de compra.

**RF14** - **Analisar abandono de carrinho:** Monitorar produtos adicionados ao carrinho, mas não comprados, para identificar padrões de abandono de compra.

**RF15** - **Recuperação de conta:** recuperação de senha por e-mail.

## Lista de Requisitos Não Funcionais

Os Requisitos Não Funcionais descrevem características ou qualidades do sistema, como desempenho, segurança ou confiabilidade, relacionando-se em como o sistema deve se comportar:

- **Usabilidade (Usability)**
    - Documentação de ajuda para o usuário.

- **Confiabilidade (Reliability)**
    - Garantir disponibilidade do sistema acima de 99%, com suporte a falhas mínimas.

- **Desempenho (Performance)**
    - Tempo médio de carregamento de página precisa ser de > 1 segundo e < 5 segundos.

- **Suportabilidade (Supportability)**
    - O sistema deve ser compatível com os principais navegadores web (Chrome, Firefox, Safari, Edge).
    - O sistema deve conseguir ser capaz de funcionar em sistemas operacionais baseados em Linux e no Windows 10 e 11.

- **Restrições de Design**
    - Desenvolver código modular para facilitar futuras atualizações e manutenções.

- **Requisitos de Implementação**
    - Como front-end será utilizado React JS.
    - Como back-end será utilizado Node JS.
    - Como banco de dados, será utilizado PostgreSQL.
    - Supabase como uma plataforma backend como serviço que utiliza PostgreSQL para fornecer autenticação, banco de dados e funções em tempo real.
    - Realizar backups diários automáticos dos dados armazenados no PostgreSQL.
    - Cobertura de testes de 99%.

- **Requisitos de Interface**
    - A interface deve seguir o manual de design da empresa Auto Rei Tintas (como cores, fontes de texto e padrões como um todo).
    - as telas precisam de ser responsivas tanto para dispositivos desktop quanto para mobile.

- **Requisitos Físicos**
    - Os dados de usuário e de gestor estarão armazenados no banco de dados postgres, com uma interface no supabase.

- **Segurança** *
    - Proteger informações sensíveis com criptografia e conformidade com LGPD.

- **Requisito Legislativo** *
    - O usuário deve ter a opção de exclusão de dados, conforme a LGPD.

Obs: Os tópicos marcados com o * não está no framework

## Histórico de Versões

| Versão | Data       | Descrição                                   | Autor(es)                                                                                                                                                                                                                                    | Revisor(es)                                                                                                                                                                                                                                  |
| ------ | ---------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.0`  | 04/12/2024 | Criação do Documento | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
