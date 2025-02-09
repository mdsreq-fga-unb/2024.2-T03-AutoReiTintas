## **PBB**

A metodologia Product Backlog Building (PBB) é uma abordagem colaborativa que conecta os objetivos do negócio com a construção do backlog do produto. Ela utiliza três elementos principais: Personas (representando os usuários), Jornadas (mapa das interações dos usuários com o sistema) e Funcionalidades (soluções necessárias). O PBB ajuda equipes a priorizarem tarefas e criarem histórias de usuário alinhadas aos critérios de valor.

## **Contexto**

O estudo de caso Tech fix se trata de uma empresa a qual vem enfrentando diversos problemas em sua gestão, bem como na aquisição de dados, comunicação interna da equipe e externa com os clientes.

Segue abaixo a imagem e o quadro interativo sobre este estudo de caso:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLwWycj4=/?moveToViewport=-20458,-8650,53084,18273&embedId=842056180046" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## **Histórias de usuário e BDD**


### 1. Perfil e Histórias de Usuário

| Perfil     | US                                                     |
|------------|--------------------------------------------------------|
| Atendente  | **US01**: Cadastrar informações de empregados/clientes |
| Atendente  | **US02**: Editar informações de empregados/clientes    |
| Atendente  | **US03**: Criar tarefas na agenda                      |
| Atendente  | **US04**: Arquivar tarefas concluídas                  |
| Atendente  | **US05**: Notificar técnicos sobre novos serviços      |
| Atendente  | **US06**: Visualizar inconsistências de agendamento    |
| Atendente  | **US07**: Corrigir inconsistências de agendamento      |
| Atendente  | **US08**: Realizar login de usuários                   |
| Atendente  | **US09**: Excluir informações cadastrais               |
| Atendente  | **US10**: Editar tarefas na agenda                     |
| Atendente  | **US11**: Compartilhar informações entre equipes       |
| Cliente    | **US12**: Consultar agendamentos em fila               |
| Cliente    | **US13**: Realizar agendamentos online                 |
| Cliente    | **US14**: Visualizar histórico de visitas              |
| Cliente    | **US15**: Consultar serviços disponíveis               |
| Cliente    | **US16**: Buscar dúvidas frequentes                    |
| Cliente    | **US17**: Acessar dúvidas frequentes                   |
| Cliente    | **US18**: Avaliar dúvidas frequentes                   |
| Diretoria  | **US19**: Criar questionários de feedback              |
| Diretoria  | **US20**: Visualizar questionários de feedback         |
| Diretoria  | **US21**: Visualizar avaliação de dúvidas frequentes   |
| Diretoria  | **US22**: Criar gráficos de feedback                   |
| Diretoria  | **US23**: Gerar relatório da equipe                    |
| Diretoria  | **US24**: Gerar gráfico de desempenho                  |
| Diretoria  | **US25**: Visualizar gráfico de desempenho             |
| Diretoria  | **US26**: Excluir gráfico de desempenho                |
| Técnico    | **US27**: Registrar serviços via dispositivo móvel     |
| Técnico    | **US28**: Alterar status de visita                     |
| Técnico    | **US29**: Gerar histórico de equipamentos              |
| Técnico    | **US30**: Consultar local/horário com confirmação      |
| Técnico    | **US31**: Registrar serviços detalhados                |
| Técnico    | **US32**: Visualizar histórico de equipamentos         |

---

### 2. Tabela de Referência de Critérios de Aceitação (CA)

Para análise de critérios de aceitação, das 32 histórias fornecidas, foram selecionadas 16(50%) que são mais relevantes ou impactantes para os perfis envolvidos (Atendente, Cliente, Diretoria, Técnico). Abaixo estão os critérios de aceitação para cada uma das 16 histórias selecionadas:

??? info "ID Único:"
    Critérios: `CA[US#]-[Nº]` (Ex: `CA01-1` = Primeiro critério da US01)

| ID Critério | Descrição (Verbo no Infinitivo) | US Relacionada |
| --- | --- | --- |
| **US01** |  |  |
| <a name="ca01-1"></a> **CA01-1** | Validar formato do CPF (XXX.XXX.XXX-XX) | US01 |
| <a name="ca01-2"></a> **CA01-2** | Exibir asterisco (*) em campos obrigatórios (email, nome, CPF, telefone, endereço) | US01 |
| <a name="ca01-3"></a> **CA01-3** | Exibir mensagem de sucesso/erro após cadastro | US01 |
| <a name="ca01-4"></a> **CA01-4** | Bloquear cadastro com CPF duplicado | US01 |
| **US03** |  |  |
| <a name="ca03-1"></a> **CA03-1** | Exigir preenchimento de: data, horário, prazo, local, nome e telefone do cliente | US03 |
| <a name="ca03-2"></a> **CA03-2** | Vincular responsáveis à tarefa (nome obrigatório) | US03 |
| <a name="ca03-3"></a> **CA03-3** | Validar descrição do problema (mín. 20 caracteres) e serviço a ser feito | US03 |
| **US04** |  |  |
| <a name="ca04-1"></a> **CA04-1** | Bloquear arquivamento de tarefas com status diferente de "Concluído" ou "Cancelado" | US04 |
| <a name="ca04-2"></a> **CA04-2** | Criar seção exclusiva para tarefas arquivadas | US04 |
| **US05** |  |  |
| <a name="ca05-1"></a> **CA05-1** | Disparar notificação automática ao cadastrar tarefa | US05 |
| <a name="ca05-2"></a> **CA05-2** | Incluir na notificação: data, horário, local, tipo de visita, descrição do problema, serviço, cliente | US05 |
| **US06** |  |  |
| <a name="ca06-1"></a> **CA06-1** | Identificar e destacar tarefas sem técnico/responsável atribuído | US06 |
| <a name="ca06-2"></a> **CA06-2** | Alertar sobre conflitos de horário em vermelho | US06 |
| **US07** |  |  |
| <a name="ca07-1"></a> **CA07-1** | Sugerir realocação de técnicos para conflitos de horário | US07 |
| **US08** |  |  |
| <a name="ca08-1"></a> **CA08-1** | Validar formato do email ([xxx@dominio.com](mailto:xxx@dominio.com)) | US08 |
| <a name="ca08-2"></a> **CA08-2** | Exibir mensagem "Login realizado com sucesso" ou "Falha no login" | US08 |
| **US13** |  |  |
| <a name="ca13-1"></a> **CA13-1** | Validar obrigatoriedade de data/horário para visita técnica | US13 |
| <a name="ca13-2"></a> **CA13-2** | Exibir mensagem de confirmação após agendamento | US13 |
| **US14** |  |  |
| <a name="ca14-1"></a> **CA14-1** | Permitir busca por cliente, técnico ou endereço | US14 |
| **US19** |  |  |
| <a name="ca19-1"></a> **CA19-1** | Incluir campo "Tipo de Serviço" no questionário | US19 |
| <a name="ca19-2"></a> **CA19-2** | Implementar escala de 0-5 para avaliação do técnico e qualidade do serviço | US19 |
| **US22** |  |  |
| <a name="ca22-1"></a> **CA22-1** | Organizar gráficos por mês e nível de satisfação | US22 |
| **US23** |  |  |
| <a name="ca23-1"></a> **CA23-1** | Relacionar horas trabalhadas vs. horas reais por técnico | US23 |
| <a name="ca23-2"></a> **CA23-2** | Gerar gráfico de horas trabalhadas (concluídas vs. atrasadas) | US23 |
| **US27** |  |  |
| <a name="ca27-1"></a> **CA27-1** | Permitir mudança de status da visita em tempo real | US27 |
| <a name="ca27-2"></a> **CA27-2** | Modo offline | US27 |
| **US29** |  |  |
| <a name="ca29-1"></a> **CA29-1** | Exibir especificações técnicas e histórico de intervenções em equipamentos | US29 |
| **US30** |  |  |
| <a name="ca30-1"></a> **CA30-1** | Permitir confirmação/desconfirmação de visita pelo cliente | US30 |
| <a name="ca30-2"></a> **CA30-2** | Rejeitar confirmação com código SMS inválido | US30 |
| **US31** |  |  |
| <a name="ca31-1"></a> **CA31-1** | Incluir campo dedicado a "Problemas Enfrentados" no registro de serviços | US31 |
| <a name="ca31-2"></a> **CA31-2** | Registrar equipamentos utilizados em cada atendimento | US31 |

---

### 3. Tabela de Cenários BDD (Formato Gherkin)

Foram escritos cenários Gherkin para 5 histórias selecionadas, cobrindo todos os critérios de aceitação declarados:

??? info "ID Único:"
    Cenários: `CEN[US#]-[Nº]` (Ex: `CEN01-1` = Primeiro cenário da US01)

| ID Cenário | Descrição | US Relacionada | Critérios Vinculados |
| --- | --- | --- | --- |
| **US01** |  |  |  |
| <a name="cen01-1"></a> **CEN01-1** | **Cadastro válido**<br>Dado que o CPF (123.456.789-09) está formatado corretamente<br>Quando confirmar o cadastro<br>Então o sistema exibe "Cadastro realizado" | US01 | CA01-1, CA01-2, CA01-4 |
| <a name="cen01-2"></a> **CEN01-2** | **CPF inválido**<br>Dado que o CPF (123.ABC.789-09) tem formato incorreto<br>Quando tentar cadastrar<br>Então o sistema bloqueia com erro "CPF inválido" | US01 | CA01-1 |
| <a name="cen01-3"></a> **CEN01-3** | **CPF duplicado**<br>Dado que o CPF já está cadastrado<br>Quando tentar cadastrar novamente<br>Então o sistema exibe "CPF já existe" | US01 | CA01-3 |
| **US03** |  |  |  |
| <a name="cen03-1"></a> **CEN03-1** | **Tarefa sem técnico**<br>Dado que nenhum técnico foi atribuído à tarefa<br>Quando tentar salvar<br>Então o sistema exige seleção de responsável | US03 | CA03-2 |
| <a name="cen03-2"></a> **CEN03-2** | **Descrição insuficiente**<br>Dado que a descrição do problema tem 15 caracteres<br>Quando tentar salvar<br>Então o sistema bloqueia com "Mínimo 20 caracteres" | US03 | CA03-3 |
| <a name="cen03-3"></a> **CEN03-3** | **Campos obrigatórios**<br>Dado que os campos de data, horário, local e descrição não foram preenchidos<br>Quando tentar salvar<br>Então o sistema bloqueia com erro "Preencha todos os campos obrigatórios" | US03 | CA03-1 |
| **US04** |  |  |  |
| <a name="cen04-1"></a> **CEN04-1** | **Arquivamento inválido**<br>Dado que a tarefa está "Em Andamento"<br>Quando tentar arquivar<br>Então o sistema exibe "Só arquive tarefas concluídas" | US04 | CA04-1 |
| <a name="cen04-2"></a> **CEN04-2** | **Recuperação de arquivamento**<br>Dado que a tarefa foi arquivada há 30 dias<br>Quando acessar a seção "Arquivadas"<br>Então é possível restaurar a tarefa | US04 | CA04-2 |
| **US05** |  |  |  |
| <a name="cen05-1"></a> **CEN05-1** | **Notificação incompleta**<br>Dado que a tarefa não tem local definido<br>Quando cadastrar<br>Então a notificação não é enviada | US05 | CA05-2 |
| <a name="cen05-2"></a> **CEN05-2** | **Notificação atrasada**<br>Dado que a tarefa foi criada às 14:00<br>Quando verificar o log às 14:03<br>Então a notificação foi enviada às 14:02 | US05 | CA05-1 |
| **US08** |  |  |  |
| <a name="cen08-1"></a> **CEN08-1** | **Email inválido**<br>Dado que o email digitado é "[usuariodominio.com](http://usuariodominio.com/)"<br>Quando tentar logar<br>Então o sistema exibe "Formato de email inválido" | US08 | CA08-1 |
| <a name="cen08-2"></a> **CEN08-2** | **Sessão expirada**<br>Dado que o usuário está inativo por 16 minutos<br>Quando tentar realizar uma ação<br>Então o sistema redireciona para a tela de login | US08 | CA08-2 |
| <a name="cen08-3"></a> **CEN08-3** | **Login realizado com sucesso**<br>Dado que o email e senha estão corretos<br>Quando tentar logar<br>Então o sistema exibe "Login realizado com sucesso" | US08 | CA08-3 |---

### 4. Matriz de Rastreabilidade Completa


Esta tabela integra os **Critérios de Aceitação** e os **Cenários** vinculados a cada **História de Usuário**.

| US       | ID Critério                                        | Descrição do Critério                                                                 | Cenários Vinculados                                                      |
|----------|----------------------------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **US01** | [CA01-1](#ca01-1)                                  | Validar formato do CPF (XXX.XXX.XXX-XX)                                                 | [CEN01-1](#cen01-1), [CEN01-2](#cen01-2)                                   |
|          | [CA01-2](#ca01-2)                                  | Exibir asterisco (*) em campos obrigatórios                                             | [CEN01-1](#cen01-1)                                                      |
|          | [CA01-3](#ca01-3)                                  | Exibir mensagem de sucesso/erro após cadastro                                           | [CEN01-1](#cen01-1), [CEN01-3](#cen01-3)                                   |
|          | [CA01-4](#ca01-4)                                  | Bloquear cadastro com CPF duplicado                                                     | [CEN01-3](#cen01-3)                                                      |
| **US03** | [CA03-1](#ca03-1)                                  | Exigir preenchimento de dados completos                                                 | [CEN03-3](#cen03-3)                                                      |
|          | [CA03-2](#ca03-2)                                  | Vincular responsáveis à tarefa                                                          | [CEN03-1](#cen03-1)                                                      |
|          | [CA03-3](#ca03-3)                                  | Validar descrição do problema (mín. 20 caracteres)                                       | [CEN03-2](#cen03-2)                                                      |
| **US04** | [CA04-1](#ca04-1)                                  | Bloquear arquivamento de tarefas não concluídas                                          | [CEN04-1](#cen04-1)                                                      |
|          | [CA04-2](#ca04-2)                                  | Criar seção exclusiva para tarefas arquivadas                                            | [CEN04-2](#cen04-2)                                                      |
| **US05** | [CA05-1](#ca05-1)                                  | Disparar notificação automática                                                          | [CEN05-2](#cen05-2)                                                      |
|          | [CA05-2](#ca05-2)                                  | Incluir dados completos na notificação                                                   | [CEN05-1](#cen05-1)                                                      |
| **US06** | [CA06-1](#ca06-1)                                  | Identificar tarefas sem técnico atribuído                                                | -                                                      |
|          | [CA06-2](#ca06-2)                                  | Alertar sobre conflitos de horário                                                       | -                                                      |
| **US07** | [CA07-1](#ca07-1)                                  | Sugerir realocação de técnicos                                                           | -                                                      |
| **US08** | [CA08-1](#ca08-1)                                  | Validar formato do email                                                                 | [CEN08-1](#cen08-1)                                                      |
|          | [CA08-2](#ca08-2)                                  | Exibir mensagem de sessão expirada                                                       | [CEN08-2](#cen08-2)                                                      |
|          | [CA08-3](#ca08-3)                                  | Exibir mensagem de login realizado                                                       | [CEN08-3](#cen08-3)                                                      |
| **US13** | [CA13-1](#ca13-1)                                  | Validar obrigatoriedade de data/horário                                                    | -                                                     |
|          | [CA13-2](#ca13-2)                                  | Exibir confirmação de agendamento                                                          | -                                                   |
| **US14** | [CA14-1](#ca14-1)                                  | Permitir busca avançada                                                                    | -                                                     |
| **US19** | [CA19-1](#ca19-1)                                  | Incluir campo "Tipo de Serviço"                                                            | -                                                     |
|          | [CA19-2](#ca19-2)                                  | Implementar escala de avaliação 0-5                                                        | -                                                     |
| **US22** | [CA22-1](#ca22-1)                                  | Organizar gráficos por mês e nível de satisfação                                           | -                                                     |
| **US23** | [CA23-1](#ca23-1)                                  | Relacionar horas trabalhadas vs. reais                                                     | -                                                     |
|          | [CA23-2](#ca23-2)                                  | Gerar gráfico de horas (concluídas vs. atrasadas)                                          | -                                                     |
| **US27** | [CA27-1](#ca27-1)                                  | Upload excedente                                                                           | -                                                     |
|          | [CA27-2](#ca27-2)                                  | Modo offline                                                                               | -                                                     |
| **US29** | [CA29-1](#ca29-1)                                  | Exibir especificações técnicas                                                             | -                                                     |
| **US30** | [CA30-1](#ca30-1)                                  | Permitir confirmação/desconfirmação de visita                                              | -                                                     |
|          | [CA30-2](#ca30-2)                                  | Rejeitar confirmação com código SMS inválido                                               | -                                                     |
| **US31** | [CA31-1](#ca31-1)                                  | Incluir campo "Problemas Enfrentados"                                                      | -                                                     |
|          | [CA31-2](#ca31-2)                                  | Registrar equipamentos utilizados                                                          | -                                                     |



| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| `1.0` | 20/01/2025 | Criação do Documento | [Mariana Letícia](https://github.com/Marianannn) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.1` | 20/01/2025 | Adição dos BDD's | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) e [Diogo](https://github.com/Diogo-Barboza) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.2` | 06/02/2025 | Refatoração da tabela (organização e definição do percentual de criterios e BDD) | [Johan](https://github.com/johan-rocha) | [Mariana Letícia](https://github.com/Marianannn), [Paulo Henrique](https://github.com/Nanashii76) |
