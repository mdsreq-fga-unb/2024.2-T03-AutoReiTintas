## **PBB**
A metodologia Product Backlog Building (PBB) é uma abordagem colaborativa que conecta os objetivos do negócio com a construção do backlog do produto. Ela utiliza três elementos principais: Personas (representando os usuários), Jornadas (mapa das interações dos usuários com o sistema) e Funcionalidades (soluções necessárias). O PBB ajuda equipes a priorizarem tarefas e criarem histórias de usuário alinhadas aos critérios de valor. 

## **Contexto**
O estudo de caso Tech fix se trata de uma empresa a qual vem enfrentando diversos problemas em sua gestão, bem como na aquisição de dados, comunicação interna da equipe e externa com os clientes.

Segue abaixo a imagem e o quadro interativo sobre este estudo de caso:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLwWycj4=/?moveToViewport=-20458,-8650,53084,18273&embedId=842056180046" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## **Histórias de usuário**

|  US  |  Cenários   |
| -- | -- |
|  US01 - eu como atendente quero cadastrar informações dos empregados e clientes para a centralização dos dados |  Dado que As informações dos empregados ou clientes contenham email, nome, cpf, telefone e endereço respectivamente validados, sendo cpf XXX.XXX.XXX-XX, telefone XX9XXXX-XXXX, email XXXX@dominio.com <br> Quando clicar em cadastrar <br> Então, ele será cadastrado <br><br> Dado que As informações dos empregados ou clientes não contenham email, nome, cpf, telefone e endereço respectivamente validados, sendo cpf XXX.XXX.XXX-XX, telefone XX9XXXX-XXXX, email XXXX@dominio.com Quando clicar em cadastrar Então, ele não será cadastrado<br><br> Mensagem de erro no cadastro<br>Dado que foi inserido dados do empregado ou cliente e não houve erro no sistema ou validação <br> Quando clicar em cadastrar<br>Então, ele receberá uma mensagem de sucesso<br> <br> Mensagem de erro no cadastro<br>	Dado que foi inserido dados do empregado ou cliente e houve erro no sistema ou validação<br>Quando clicar em cadastrar <br>Então, ele receberá uma mensagem de erro |
|US02 - eu como atendente quero  centralizar informações entre equipes (técnicos, atendimento e diretoria) em uma agenda para a melhor organização de dados da empresa | 	Dado que	A atendente possui acesso ao sistema<br>Quando	ela for visualizar as tarefas na agenda<br>Então,	as informações sobre todas as equipes estarão presentes na agenda|
|US03 - eu como atendente quero  arquivar tarefas na agenda para a melhor organização de dados da empresa | |
|US04 - eu como atendente quero  notificar técnicos sobre agendamentos de novos serviços para comunicação mais efetiva entre atendente, técnicos e diretoria | |
| US05 - eu como atendente quero  visualizar e corrigir inconsistências do agendamento identificadas rapidamente para melhorar satisfação do cliente| |
|US06 - eu como atendente quero  realizar login dos empregados,  clientes para melhor organização de dados da companhia | |
| US07 - eu como cliente corporativo quero  consultar agendamentos, informações, horários e especificações em formato de fila com validade do serviço para ter facilidade ao registrar atendimento/visita| |
| US08 - eu como cliente corporativo quero  realizar agendamentos online para ter facilidade ao registrar atendimento/visita| |
|US09 - eu como cliente corporativo quero  Consultar itens e serviços disponíveis para ter facilidade ao registrar atendimento/visita | |
|US10 - eu como cliente corporativo quero  ver dúvidas frequentes sobre o funcionamento do sistema para visualizar os serviços disponíveis ou feitos de modo prático | |
|US11 - eu como cliente corporativo quero  visualizar históricos de visitas para visualizar os serviços disponíveis ou feitos de modo prático | |
|US12 - eu como diretora de operações quero  Implementar questionários de feedback após o atendimento para Encontrar pontos de melhoria de atendimentos e serviços técnicos prestados | |
| US13 - eu como diretora de operações quero  Automatizar a coleta e análise dos feedbacks para Encontrar pontos de melhoria de atendimentos e serviços técnicos prestados| |
| US14 - eu como diretora de operações quero  criar gráficos sobre os dados coletados do feedback dos clientes para Aumento da fidelização ao demonstrar interesse na opinião do cliente | |
| US15 - eu como diretora de operações quero  Gerar relatórios consolidados de operações para consolidar a análise de desempenho| |
| US16 - Melhor embasamento para decisões operacionais da diretoria | |
| US17 - Eu como técnico de campo quero realizar o registro de informações sobre os serviços em um dispositivo móvel para ter Integração direta com o sistema central, melhorando o fluxo de informações| |
| US18 - Eu como técnico de campo quero mudar de status de visita(a fazer, em andamento e realizado) no dispositivo móvel para ter rapidez na comunicação entre os técnicos e a central| |
| US19 - Eu como técnico de campo quero mudar de status de visita(a fazer, em andamento e realizado) no dispositivo móvel para ter rapidez na comunicação entre os técnicos e a central | |
| US20 - Eu como técnico de campo Consultar local, horário e disponibilidade com confirmação de visita ao cliente para reduzir de erros e inconsistências nos registros de serviços| |
| US21 - Eu como técnico de campo quero Registrar serviços, detalhando tipos de atendimentos e problemas para reduzir de erros e inconsistências nos registros de serviços| |
| US22 - Eu como técnico de campo quero Armazenar e acessar históricos detalhados dos equipamentos para facilitação ao coletar dados e gerar relatórios técnicos | |


| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| ---| ---| ---| ---| --- |
| `1.0` | 20/01/2025 | Criação do Documento | [Mariana Letícia](https://github.com/Marianannn)| |