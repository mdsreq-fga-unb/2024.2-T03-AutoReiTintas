## **PBB**

A metodologia Product Backlog Building (PBB) é uma abordagem colaborativa que conecta os objetivos do negócio com a construção do backlog do produto. Ela utiliza três elementos principais: Personas (representando os usuários), Jornadas (mapa das interações dos usuários com o sistema) e Funcionalidades (soluções necessárias). O PBB ajuda equipes a priorizarem tarefas e criarem histórias de usuário alinhadas aos critérios de valor.

## **Contexto**

O estudo de caso Tech fix se trata de uma empresa a qual vem enfrentando diversos problemas em sua gestão, bem como na aquisição de dados, comunicação interna da equipe e externa com os clientes.

Segue abaixo a imagem e o quadro interativo sobre este estudo de caso:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLwWycj4=/?moveToViewport=-20458,-8650,53084,18273&embedId=842056180046" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## **Histórias de usuário e BDD**

### **1. Persona e Histórias de usuário**

| Perfil    	| US                                                 	|
|-----------	|----------------------------------------------------	|
| Atendente 	| US01: Cadastrar informações de empregados/clientes 	|
| Atendente 	| US02: Editar informações de empregados/clientes    	|
| Atendente 	| US03: Criar tarefas na agenda                      	|
| Atendente 	| US04: Arquivar tarefas concluídas                  	|
| Atendente 	| US05: Notificar técnicos sobre novos serviços      	|
| Atendente 	| US06: Visualizar inconsistências de agendamento    	|
| Atendente 	| US07: Corrigir inconsistências de agendamento      	|
| Atendente 	| US08: Realizar login de usuários                   	|
| Atendente 	| US09: Excluir informações cadastrais               	|
| Atendente 	| US10: Editar tarefas na agenda                     	|
| Atendente 	| US11: Compartilhar informações entre equipes       	|
| Cliente   	| US12: Consultar agendamentos em fila               	|
| Cliente   	| US13: Realizar agendamentos online                 	|
| Cliente   	| US14: Visualizar histórico de visitas              	|
| Cliente   	| US15: Consultar serviços disponíveis               	|
| Cliente   	| US16: Buscar dúvidas frequentes                    	|
| Cliente   	| US17: Acessar dúvidas frequentes                   	|
| Cliente   	| US18: Avaliar dúvidas frequentes                   	|
| Diretoria 	| US19: Criar questionários de feedback              	|
| Diretoria 	| US20: Visualizar questionários de feedback         	|
| Diretoria 	| US21: Visualizar avaliação de dúvidas frequentes   	|
| Diretoria 	| US22: Criar gráficos de feedback                   	|
| Diretoria 	| US23: Gerar relatório da equipe                    	|
| Diretoria 	| US24: Gerar gráfico de desempenho                  	|
| Diretoria 	| US25: Visualizar gráfico de desempenho             	|
| Diretoria 	| US26: Excluir gráfico de desempenho                	|
| Técnico   	| US27: Registrar serviços via dispositivo móvel     	|
| Técnico   	| US28: Alterar status de visita                     	|
| Técnico   	| US29: Gerar histórico de equipamentos              	|
| Técnico   	| US30: Consultar local/horário com confirmação      	|
| Técnico   	| US31: Registrar serviços detalhados                	|
| Técnico   	| US32: Visualizar histórico de equipamentos         	|

### **2. Tabela de Referência de Critérios de Aceitação (CA)**

??? info "ID Único:"
    Critérios: `CA[US#]-[Nº]` (Ex: `CA01-1` = Primeiro critério da US01)  

### **3. Tabela de Cenários BDD (Formato Gherkin) (CEN)**
| ID Cenário | Descrição                                                                               | US Relacionada | Critérios Vinculados |  
|------------|-----------------------------------------------------------------------------------------|----------------|----------------------|  
| **US01**   |                                                                                         |                |                      |  
| CEN01-1    | **Cadastro válido**<br>Dado que o CPF (123.456.789-09) está formatado corretamente<br>Quando confirmar o cadastro<br>Então o sistema exibe "Cadastro realizado" | US01 | CA01-1, CA01-2, CA01-4 |  
| CEN01-2    | **CPF inválido**<br>Dado que o CPF (123.ABC.789-09) tem formato incorreto<br>Quando tentar cadastrar<br>Então o sistema bloqueia com erro "CPF inválido" | US01 | CA01-1 |  
| CEN01-3    | **CPF duplicado**<br>Dado que o CPF já está cadastrado<br>Quando tentar cadastrar novamente<br>Então o sistema exibe "CPF já existe" | US01 | CA01-3 |  
| **US03**   |                                                                                         |                |                      |  
| CEN03-1    | **Tarefa sem técnico**<br>Dado que nenhum técnico foi atribuído à tarefa<br>Quando tentar salvar<br>Então o sistema exige seleção de responsável | US03 | CA03-2 |  
| CEN03-2    | **Descrição insuficiente**<br>Dado que a descrição do problema tem 15 caracteres<br>Quando tentar salvar<br>Então o sistema bloqueia com "Mínimo 20 caracteres" | US03 | CA03-3 |  
| **US04**   |                                                                                         |                |                      |  
| CEN04-1    | **Arquivamento inválido**<br>Dado que a tarefa está "Em Andamento"<br>Quando tentar arquivar<br>Então o sistema exibe "Só arquive tarefas concluídas" | US04 | CA04-1 |  
| CEN04-2    | **Recuperação de arquivamento**<br>Dado que a tarefa foi arquivada há 30 dias<br>Quando acessar a seção "Arquivadas"<br>Então é possível restaurar a tarefa | US04 | CA04-2 |  
| **US05**   |                                                                                         |                |                      |  
| CEN05-1    | **Notificação incompleta**<br>Dado que a tarefa não tem local definido<br>Quando cadastrar<br>Então a notificação não é enviada | US05 | CA05-2 |  
| CEN05-2    | **Notificação atrasada**<br>Dado que a tarefa foi criada às 14:00<br>Quando verificar o log às 14:03<br>Então a notificação foi enviada às 14:02 | US05 | CA05-1 |  
| **US06**   |                                                                                         |                |                      |  
| CEN06-1    | **Conflito de horário**<br>Dado que o técnico João está ocupado das 14h às 16h<br>Quando tentar agendar nova tarefa neste período<br>Então o sistema destaca o conflito em vermelho | US06 | CA06-1, CA06-2 |  
| **US07**   |                                                                                         |                |                      |  
| CEN07-1    | **Sugestão de realocação**<br>Dado que há um conflito de horário<br>Quando visualizar a agenda<br>Então o sistema sugere realocar para técnico Maria | US07 | CA07-1 |  
| **US08**   |                                                                                         |                |                      |  
| CEN08-1    | **Email inválido**<br>Dado que o email digitado é "usuariodominio.com"<br>Quando tentar logar<br>Então o sistema exibe "Formato de email inválido" | US08 | CA08-1 |  
| CEN08-2    | **Sessão expirada**<br>Dado que o usuário está inativo por 16 minutos<br>Quando tentar realizar uma ação<br>Então o sistema redireciona para a tela de login | US08 | CA08-2 |  
| **US13**   |                                                                                         |                |                      |  
| CEN13-1    | **Agendamento sem data**<br>Dado que o campo de data/horário está vazio<br>Quando tentar agendar<br>Então o sistema bloqueia com "Campo obrigatório" | US13 | CA13-1 |  
| **US19**   |                                                                                         |                |                      |  
| CEN19-1    | **Questionário incompleto**<br>Dado que o campo "Tipo de Serviço" não foi preenchido<br>Quando enviar o questionário<br>Então o sistema exige seleção | US19 | CA19-2 |  
| **US23**   |                                                                                         |                |                      |  
| CEN23-1    | **Discrepância de horas**<br>Dado que o técnico gastou 8h em uma tarefa planejada para 6h<br>Quando gerar relatório<br>Então o sistema destaca a diferença de 33% | US23 | CA23-1 |  
| **US27**   |                                                                                         |                |                      |  
| CEN27-1    | **Upload excedente**<br>Dado que 6 fotos foram anexadas<br>Quando tentar salvar<br>Então o sistema bloqueia com "Máximo 5 fotos" | US27 | CA27-1 |  
| **US30**   |                                                                                         |                |                      |  
| CEN30-1    | **Confirmação inválida**<br>Dado que o código SMS está incorreto<br>Quando confirmar visita<br>Então o sistema rejeita a confirmação | US30 | CA30-2 |  
| **US31**   |                                                                                         |                |                      |  
| CEN31-1    | **Problemas não relatados**<br>Dado que o campo "Problemas Enfrentados" está vazio<br>Quando finalizar serviço<br>Então o sistema permite registro sem preenchimento | US31 | CA31-1 |  
| **US32**   |                                                                                         |                |                      |  
| CEN32-1    | **Histórico expirado**<br>Dado que a intervenção no equipamento foi em 2025<br>Quando buscar em 2030<br>Então o sistema retorna "Registro não encontrado" | US32 | CA32-1 | 

??? info "ID Único:"
    Cenários: `CEN[US#]-[Nº]` (Ex: `CEN01-1` = Primeiro cenário da US01)

### **4. Matriz de Rastreabilidade Completa**


| ------ | ---------- | -------------------- | ------------------------------------------------ | ----------- |
| `1.0`  | 20/01/2025 | Criação do Documento | [Mariana Letícia](https://github.com/Marianannn) |       [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza)       |
| `1.1`  | 20/01/2025 | Adição dos BDD's | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) e [Diogo](https://github.com/Diogo-Barboza)  |   [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza)           |

