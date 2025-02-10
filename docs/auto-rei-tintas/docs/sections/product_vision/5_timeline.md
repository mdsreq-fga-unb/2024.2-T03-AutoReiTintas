# **Cronograma e Entregas**

Com base nas estratégias apontadas pelos frameworks e decididas pelo grupo, a seguinte proposta de cronograma e entregas e feito:

| **Sprint**   | **Fase do ScrumXP**        | **Entregas**                                                                 | **Histórias de Usuário (US)**                                                                                     | **Data Início** | **Data Fim** | **Observações** |
| ------------ | -------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------- | ------------ | --------------- |
| **Sprint 1** | Planejamento de Sprint     | Planejamento, elaboração dos requisitos, definição do backlog e MVP          | -                                                                                                                 | 25/11/2024      | 08/12/2024   | -               |
|              | Execução (Desenvolvimento) | Desenvolvimento das primeiras funcionalidades, como definição de arquitetura | -                                                                                                                 | 25/11/2024      | 08/12/2024   | -               |
|              | Revisão da Sprint          | Apresentação do planejamento e backlog                                       | -                                                                                                                 | 08/12/2024      | 08/12/2024   | -               |
|              | Retrospectiva da Sprint    | Análise do planejamento e ajustes para as próximas sprints                   | -                                                                                                                 | 08/12/2024      | 08/12/2024   | -               |
| **Sprint 2** | Planejamento de Sprint     | Planejamento do cadastro, login, gestão de produtos, roles e recuperação de senha | **US01 (Cadastro de usuário)**<br> **US04 (Autenticação de usuário e gestor)**<br> **US05 (CRUD de produtos)**<br> **US06 (Controle de roles)**<br> **US14 (Recuperação de senha)** | 09/12/2024      | 22/12/2024   | -               |
|              | Execução (Desenvolvimento) | Desenvolvimento das funcionalidades                                          | Implementação do cadastro (US01), login (US04), CRUD de produtos (US05), roles (US06) e recuperação de senha (US14) | 09/12/2024      | 22/12/2024   | -               |
|              | Revisão da Sprint          | Apresentação do andamento do projeto                                         | Validação do cadastro, login e gestão de produtos                                                                 | 22/12/2024      | 22/12/2024   | -               |
|              | Retrospectiva da Sprint    | Análise do que funcionou bem e o que pode ser melhorado                      | Discussão sobre dificuldades na implementação de roles e recuperação de senha                                     | 22/12/2024      | 22/12/2024   | -               |
| **RECESSO**  | -                          | -                                                                            | -                                                                                                                 | 23/12/2024      | 05/01/2025   | -               |
| **Sprint 3** | Planejamento de Sprint     | Planejamento da busca, carrinho, navegação sem login, WhatsApp e gestão de perfis | **US15 (Busca de produtos)**<br> **US07 (Carrinho de compras)**<br> **US09 (Navegação sem login)**<br> **US02 (Edição de perfil)** | 06/01/2025      | 27/01/2025   | **Atraso**: Sprint 2 e 3 serão entregues junto com a Sprint 4. |
|              | Execução (Desenvolvimento) | Desenvolvimento das funcionalidades                                          | Implementação da busca (US15), carrinho (US07), navegação sem login (US09), WhatsApp (US08), edição (US02) e exclusão de conta (US03) | 06/01/2025      | 27/01/2025   | Duração estendida para 3 semanas devido a atrasos. |
|              | Revisão da Sprint          | Testes e validação das funcionalidades integradas                            | Validação do fluxo de navegação, carrinho, WhatsApp e gestão de perfis                                            | 27/01/2025      | 27/01/2025   | -               |
|              | Retrospectiva da Sprint    | Reflexão sobre os ajustes e melhorias                                        | Discussão sobre priorização e gestão de tempo                                                                     | 27/01/2025      | 27/01/2025   | -               |
| **Sprint 4** | Planejamento de Sprint     | Planejamento do histórico de compras                                         | **US11 (Histórico de pedidos)**<br> **US08 (Redirecionamento para WhatsApp)**<br> **US03 (Exclusão de conta)**                                                                                | 03/02/2025      | 10/02/2025   | -               |
|              | Execução (Desenvolvimento) | Implementação do histórico de compras                                        | Página de histórico de pedidos (US11)                                                                             | 03/02/2025      | 10/02/2025   | -               |
|              | Revisão da Sprint          | Testes do histórico de compras                                               | Validação da sincronização com o banco de dados                                                                   | 10/02/2025      | 10/02/2025   | -               |
|              | Retrospectiva da Sprint    | Avaliação do desempenho e ajustes                                            | Melhorias na consulta de histórico                                                                                | 10/02/2025      | 10/02/2025   | -               |


### Tabela de Acompanhamento de Sprints

| **Sprint**   | **Planejado**                                                                                     | **Realizado**                                                                                 | **Motivos**                                                                 |
|--------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Sprint 1** | - Planejamento inicial<br>- Definição de backlog e MVP                                           | - Planejamento concluído<br>- Backlog definido                                                | Sem atrasos ou desvios                                                      |
| **Sprint 2** | - US01 (Cadastro)<br>- US04 (Login)<br>- US05 (CRUD produtos)<br>- US06 (Roles)<br>- US14 (Senha) | - US01, US04, US05, US06 implementadas                                                       | **Atrasos e mal planejamento**<br>- US14 não concluída                      |
| **Sprint 3** | - US15 (Busca)<br>- US07 (Carrinho)<br>- US09 (Navegação)<br>- US02 (Perfil)<br> | - US15, US07, US09, US02 implementadas                                            | **Atrasos acumulados**<br>- Entregue junto com a Sprint 4                   |
| **Sprint 4** | - US11 (Histórico de compras)<br>- US08(Whatsapp)<br>- US03(exclusão)                                                                    | - US11 não implementada<br> - US03 Não concluída<br> - US08 implementada                                                                       | **Falta de priorização**<br>- Recursos alocados para corrigir atrasos       |

---

### US Não Entregues no MVP
| **US**  | **Status**            | **Motivo**                                                                 |
|---------|-----------------------|---------------------------------------------------------------------------|
| **US10**| Excluída do MVP       | Avaliação de produtos não considerada crítica para a primeira versão.     |
| **US11**| Não implementada      | Atrasos acumulados e realocação de recursos para funcionalidades críticas.|
| **US12**| Excluída do MVP       | Relatórios de vendas demandavam complexidade técnica adicional.           |
| **US13**| Excluída do MVP       | Monitoramento de carrinhos não prioritário para o MVP.                    |
| **US14**| Não implementada      | Falta de tempo devido a atrasos no planejamento inicial.                  |

---

### Legenda:
- **Planejado**: Funcionalidades previstas para a sprint.
- **Realizado**: Funcionalidades efetivamente entregues.
- **Motivos**: Justificativas para divergências entre planejado e realizado.
- **MVP**: Funcionalidades essenciais para a versão inicial do produto.


## Histórico de Versões

| Versão |    Data | Descrição | Autor(es) | Revisor(es) |
| ---| ---| ---| ---| --- |
| `1.0` | 26/11/2024 | Criação do Documento |  [Paulo Henrique](https://github.com/Nanashii76) |    [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.1` | 26/11/2024 | Ajuste do Cronograma |  [Paulo Henrique](https://github.com/Nanashii76) |    [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.2` | 05/12/2024 | Ajuste do cronograma e visualização | [Paulo Henrique](https://github.com/Nanashii76) |  [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.3` | 12/12/2024 | Mudança da ordem das sprints e detalhamento | [Paulo Henrique](https://github.com/Nanashii76) e  [Johan](https://github.com/johan-rocha) |  [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.4` | 12/12/2024 | Englobando fases do SrumXP ao cronograma | [Paulo Henrique](https://github.com/Nanashii76) |  [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `2.0` | 10/02/2025 | Ajustando o Cronograma | [Paulo Henrique](https://github.com/Nanashii76) |  [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |

