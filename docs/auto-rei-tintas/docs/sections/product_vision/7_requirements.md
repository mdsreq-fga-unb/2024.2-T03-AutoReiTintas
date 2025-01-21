# **Requisitos de Software**

## Lista de Requisitos Funcionais

Os Requisitos Funcionais especificam as funcionalidades e serviços que o sistema de catálogo da auto rei tintas deve fornecer
  

| Código | Descrição |
| ---| --- |
| RF01 | Registrar usuários: O sistema deve ser capaz de permitir o cadastro de novos clientes. |
| RF02 | Atualizar usuários: O sistema deve ser capaz de permitir a atualização das informações dos perfis dos clientes. |
| RF03 | Excluir usuário: O sistema deve ser capaz de ter a opção de exclusão de dados. |
| RF04 | Fazer Login de usuário: O sistema deve ser capaz de permitir a autenticação para usuários clientes e gestores do sistema. |
| RF05 | Atualizar produtos: O sistema deve ser capaz de permitir que os gestores criem, alterem e excluam produtos. |
| RF06 | Administrar roles: O sistema deve permitir que o administrador crie, altere e exclua gestores para controle de estoque. |
| RF07 | Gerenciar carrinho: O sistema deve permitir que clientes adicionem produtos ao carrinho, removam ou modifiquem as quantidades. |
| RF08 | Redirecionar compra: O sistema deve permitir o redirecionamento da compra para o atendimento via WhatsApp. |
| RF09 | Navegar sem o login: O sistema deve permitir que os usuários naveguem e montem seus carrinhos de compra sem a necessidade de login no site. |
| RF10 | Avaliar venda e produto: O sistema deve permitir que o usuário avalie a venda e o produto pelo site. |
| RF11 | Consultar pedidos: O sistema deve permitir que clientes logados consultem o histórico de pedidos realizados. |
| RF12 | Gerar relatórios de vendas: O sistema deve permitir a geração de relatórios básicos sobre produtos vendidos e tendências de compra. |
| RF13 | Analisar abandono de carrinho: O sistema deve monitorar produtos adicionados ao carrinho, mas não comprados, para identificar padrões de abandono. |
| RF14 | Recuperar conta: O sistema deve realizar a recuperação de senha por e-mail. |

  

## Lista de Requisitos Não Funcionais

Os Requisitos Não Funcionais descrevem características ou qualidades do sistema, como desempenho, segurança ou confiabilidade, relacionando-se em como o sistema deve se comportar. A seguir, os requisitos não funcionais foram evidenciados através do **framework URPS+,** sendo complementado com o **Framework Sommerville,** mostrando outros tipos de requisitos não funcionais como segurança e requisito legislativo.

  

| Categoria | Código | Descrição |
| ---| ---| --- |
| **Usabilidade (Usability)** | RNF01 | Documentação de ajuda para o usuário. |
| **Confiabilidade (Reliability)** | RNF02 | Garantir disponibilidade do sistema acima de 99%, com suporte a falhas mínimas. |
| **Desempenho (Performance)** | RNF03 | Tempo médio de carregamento de página precisa ser de > 1 segundo e < 5 segundos. |
| **Suportabilidade (Supportability)** | RNF04 | O sistema deve ser compatível com os principais navegadores web (Chrome, Firefox, Safari, Edge). |
|  | RNF05 | O sistema deve conseguir funcionar em sistemas operacionais baseados em Linux e no Windows 10 e 11. |
| **Restrições de Design** | RNF06 | Desenvolver código modular para facilitar futuras atualizações e manutenções. |
| **Requisitos de Implementação** | RNF07 | Como front-end será utilizado React JS. |
|  | RNF08 | Como back-end será utilizado Node JS. |
|  | RNF09 | Como banco de dados, será utilizado PostgreSQL. |
|  | RNF10 | Supabase como uma plataforma backend como serviço que utiliza PostgreSQL para fornecer autenticação, banco de dados e funções em tempo real. |
|  | RNF11 | Realizar backups diários automáticos dos dados armazenados no PostgreSQL. |
|  | RNF12 | Cobertura de testes de 99%. |
| **Requisitos de Interface** | RNF13 | A interface deve seguir o manual de design da empresa Auto Rei Tintas (como cores, fontes de texto e padrões como um todo). |
|  | RNF14 | As telas precisam ser responsivas tanto para dispositivos desktop quanto para mobile. |
| **Requisitos Físicos** | RNF15 | Os dados de usuário e de gestor estarão armazenados no banco de dados PostgreSQL, com uma interface no Supabase. |
| **Segurança\*** | RNF16 | Proteger informações sensíveis com criptografia e conformidade com LGPD. |
| **Requisito Legislativo\*** | RNF17 | O usuário deve ter a opção de exclusão de dados, conforme a LGPD. |

  

Obs: Os tópicos marcados com o \* não estão no URPS+

  

## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| ---| ---| ---| ---| --- |
| `1.0` | 11/11/2024 | Criação do Documento | [Paulo Henrique](https://github.com/Nanashii76) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.1` | 05/12/2024 | Atualização dos requisitos Não funcionais | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) e [Diogo](https://github.com/Diogo-Barboza) |

