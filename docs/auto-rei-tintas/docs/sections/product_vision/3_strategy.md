# 3 Estratégias de Engenharia de Software

Utilizando o framework de Sommerville no contexto do projeto e equipe para escolher a abordagem a seguir
## Questões Técnicas

## Desafios Identificados

1. **Integração com o ERP existente**:
    - A empresa já possui um ERP eficiente. É necessário garantir que as novas soluções digitais, como e-commerce, integrem-se ao sistema sem perda de funcionalidade ou redundância.
    - Caso não seja possível a integração com o ERP, será necessário modelar um novo banco do zero
2. **Plataforma de E-commerce**:
    - Escolha e desenvolvimento de uma plataforma que seja escalável, segura para atender ao público diversificado.
3. **Infraestrutura Tecnológica**:
    - Avaliar a necessidade de servidores, cloud computing e segurança para armazenar dados de clientes, pedidos e produtos.
4. **Acessibilidade e UX/UI**:
    - Criar um ambiente digital acessível para diferentes perfis de usuários, considerando dispositivos móveis e desktops.

## Questões Humanas

## Desafios Identificados

1. **Capacitação da Equipe**:
    - A equipe de vendas e suporte já possui pessoas treinadas para gerenciar a plataforma de e-commerce.
2. **Resistência à Mudança**:
    - Parte dos colaboradores pode resistir à adoção de novos processos digitais.
3. **Comunicação entre Setores**:
    - É crucial alinhar os times de vendas, marketing e TI para garantir que todos estejam engajados e preparados para colaborar no projeto.
4. **Experiência do Cliente**:
    - Implementar canais de suporte eficientes para manter a confiança dos clientes na transição para os canais digitais.

## Questões Organizacionais

## Desafios Identificados

1. **Mudança Cultural e Estratégica**:
    - A empresa precisa passar de uma estratégia tradicional para uma digital-first, sem perder sua identidade e qualidade.
2. **Investimento Inicial**:
    - Necessidade de justificar e alocar recursos financeiros adequados para o desenvolvimento da solução digital.
3. **Escalabilidade**:
    - Planejar o crescimento do sistema para comportar futuros aumentos de demanda.

## Escolha da Metodologia Ágil

Após analisar os desafios, a **Scrum** parece ser a melhor abordagem para este projeto, considerando:

- **Complexidade técnica**: ScrumXP permite a divisão do trabalho em sprints iterativos, facilitando o desenvolvimento modular da plataforma de e-commerce e integração com o ERP, ou a modelagem de um novo banco.
- **Necessidade de feedback constante**: Sprint reviews permitem ajustes rápidos com base no retorno de stakeholders internos e externos.
- **Colaboração entre equipes**: ScrumXP promove reuniões diárias que alinham equipes multidisciplinares, reduzindo a resistência à mudança e aumentando o engajamento.
- **Flexibilidade**: A metodologia permite mudanças no escopo à medida que novas demandas ou desafios são identificados.

## 3 Estratégias de Engenharia de Software

## 3.1 Estratégia Priorizada

**Abordagem:** Ágil **Ciclo de Vida:** Iterativo **Processo:** ScrumXP

## 3.2 Quadro Comparativo

|**Características**|**RAD**|**Scrum/XP**|**Protótipo**|
|---|---|---|---|
|**Abordagem Geral**|Abordagem Ágil, com ciclos rápidos de desenvolvimento e prototipagem intensa. Ideal para entregas rápidas e alta flexibilidade.|Abordagem Ágil com práticas técnicas rigorosas, como programação em par e testes automatizados, com foco em entregas frequentes e qualidade técnica.|Abordagem Ágil focada em modelos funcionais iniciais para refinar requisitos. Útil em projetos com requisitos incertos.|
|**Foco em Arquitetura**|Arquitetura modular e flexível, com componentes reutilizáveis para prototipagem rápida.|Arquitetura simples e evolutiva, com refatoração contínua e design emergente.|Arquitetura inicial descartável ou simplificada, servindo como base exploratória para decisões futuras.|
|**Estrutura de Processos**|Estrutura ágil e iterativa, com ciclos curtos de prototipagem, revisão contínua e adaptação rápida.|Estrutura flexível com ênfase em práticas técnicas como programação em par, integração contínua e refatoração constante.|Estrutura menos formal, com ciclos de prototipagem e refinamento guiados pelo feedback do usuário.|
|**Flexibilidade de Requisitos**|Alta; requisitos são ajustáveis durante a prototipagem e desenvolvimento.|Alta; requisitos podem mudar frequentemente com base no feedback contínuo.|Alta; requisitos evoluem conforme o feedback do usuário em iterações de prototipagem.|
|**Colaboração com Clientes**|Intensa; cliente fortemente envolvido em iterações de prototipagem e revisões rápidas.|Alta; cliente frequentemente envolvido para revisar incrementos e fornecer feedback contínuo.|Intensa; cliente é essencial para fornecer feedback constante durante a construção e revisão dos protótipos.|
|**Complexidade do Processo**|Baixa a moderada; foco em prototipagem rápida e feedback contínuo, com menos processos formais.|Baixa a moderada; processo simplificado e adaptável, com foco na autonomia da equipe e práticas técnicas, sem necessidade de documentação extensiva.|Baixa a moderada; menos documentação formal, priorizando desenvolvimento incremental de protótipos.|
|**Qualidade Técnica**|Moderada; prioriza entrega rápida de protótipos, podendo sacrificar qualidade técnica inicial.|Alta; práticas rigorosas como testes automatizados, programação em par e refatoração garantem alta qualidade técnica.|Moderada; foco inicial em validar requisitos por meio de protótipos, ajustando qualidade técnica conforme feedback.|
|**Práticas de Desenvolvimento**|Prototipagem rápida, entregas frequentes e ajustes baseados no feedback do cliente.|Programação em par, testes automatizados, refatoração constante e design simples.|Análise de requisitos, criação de protótipos funcionais e refinamento iterativo com base no feedback.|
|**Adaptação ao Projeto**|Ideal para projetos com mudanças rápidas e frequentes, exigindo entrega rápida de protótipos.|Adequado para projetos com requisitos definidos, mas que exigem flexibilidade e evolução constante, com alta qualidade técnica.|Ideal para projetos com escopo indefinido ou em fase exploratória, onde feedback constante é necessário para definir requisitos.|
|**Documentação**|Documentação moderada; foco em requisitos e arquitetura para suporte à prototipagem.|Documentação mínima; limitada a testes, histórias de usuário e artefatos técnicos, com foco na qualidade do código.|Documentação reduzida; prioriza protótipos e comunicação constante com o cliente para validação de requisitos.|
|**Controle de Qualidade**|Controle básico; ênfase em testes ao final de iterações para validar funcionalidades.|Controle rigoroso; uso de TDD, integração contínua e práticas técnicas para garantir qualidade.|Controle flexível; baseia-se em validações incrementais e ajustes rápidos nos protótipos.|
|**Escalabilidade**|Limitada; mais adequado para projetos pequenos ou médios com fácil interação cliente-equipe.|Moderada; pode ser aplicado a projetos maiores com boa coordenação e práticas técnicas consistentes.|Limitada; mais eficaz em projetos pequenos e médios devido à dependência de interações rápidas e frequentes.|
|**Suporte a Equipes**|Moderado; exige equipes ágeis, colaborativas e com comunicação constante, mas com papéis menos definidos.|Moderado; equipes autônomas e colaborativas, com práticas técnicas que exigem comprometimento e coordenação.|Moderado; favorece equipes pequenas e flexíveis, com foco na comunicação direta e ajustes iterativos.|

## 3.3 Justificativa

No projeto Auto Rei Tintas, com a ajuda do framework GUPTA adaptado - incluindo o processo ScrumXP a fim de analisar mais processos possíveis a serem utilizados no projeto -, o ScrumXP e o Protótipo são os que mais se encaixam como metodologia, porém, a escolha do ScrumXP se deve aos seguintes fatores:

1. Requisitos Dinâmicos e Complexos: Os requisitos do projeto podem mudar frequentemente e indicam a construção de um sistema complexo.
2. Equipe com Experiência Variada: A equipe apresenta pouca experiência em projetos similares, o ScrumXp permite um aprendizado contínuo.
3. Envolvimento dos Usuários: O envolvimento ativo dos usuários é fundamental em todas as fases do projeto.
4. Projetos com Prazos Curtos: O cronograma da disciplina é apertado e temos recursos limitados, o que indica a necessidade de um ciclo iterativo.
5. Alta Resiliência a Mudanças: O Scrum, possui revisões frequentes e replanejamento a cada sprint, é mais dinâmica para lidar com mudanças constantes.

|**Critérios**|**Waterfall**|**Protótipo**|**Processo Unificado**|**Evolucionário**|**Espiral**|**RAD**|**SCRUM/XP**|**PROJETO**|
|---|---|---|---|---|---|---|---|---|
|**Requisitos**|||||||||
|Os requisitos são fáceis de entender e definir?|Sim ✅|Não ❌|Não ❌|Não ❌|Não ❌|Sim ✅|Não ❌|Sim ✅|
|Mudamos os requisitos com bastante frequência?|Não ❌|Sim ✅|Não ❌|Não ❌|Sim ✅|Não ❌|Sim ✅|Sim ✅|
|Podemos definir os requisitos no início do ciclo?|Sim ✅|Não ❌|Sim ✅|Sim ✅|Não ❌|Sim ✅|Sim ✅|Sim ✅|
|Os requisitos indicam um sistema complexo a ser construído?|Não ❌|Sim ✅|Sim ✅|Sim ✅|Sim ✅|Não ❌|Sim ✅|Sim ✅|
|**Total**|2|2|2|2|2|2|3||
||||||||||
|**Equipe de Desenvolvimento**|||||||||
|Pouca experiência em projetos similares|Não ❌|Sim ✅|Não ❌|Não ❌|Sim ✅|Não ❌|Sim ✅|Sim ✅|
|Pouco conhecimento de domínio (novidade na tecnologia)|Sim ✅|Não ❌|Sim ✅|Sim ✅|Sim ✅|Não ❌|Sim ✅|Não ❌|
|Pouca experiência com as ferramentas a serem usadas|Sim ✅|Não ❌|Não ❌|Não ❌|Sim ✅|Não ❌|Sim ✅|Não ❌|
|Disponibilidade de treinamento, se necessário|Não ❌|Não ❌|Sim ✅|Sim ✅|Não ❌|Sim ✅|Sim ✅|Sim ✅|
|**Total**|0|3|2|2|1|3|2||
||||||||||
|**Envolvimento dos usuários**|||||||||
|Envolvimento dos usuário em todas as fases|Não ❌|Sim ✅|Não ❌|Não ❌|Não ❌|Sim ✅|Sim ✅|Sim ✅|
|Participação limitada do usuário|Sim ✅|Não ❌|Sim ✅|Sim ✅|Sim ✅|Não ❌|Não ❌|Sim ✅|
|Usuário sem experiência anterior de participação em projetos similares|Não ❌|Sim ✅|Sim ✅|Sim ✅|Sim ✅|Não ❌|Sim ✅|Sim ✅|
|Usuário é especialista no domínio do problema|Não ❌|Sim|Não ❌|Não ❌|Não ❌|Sim ✅|Sim ✅|Sim ✅|
|**Total**|1|3|2|2|2|2|3||
||||||||||
|**Tipo de Projeto e Risco**|||||||||
|O financiamento é estável para o projeto|Sim ✅|Sim ✅|Não ❌|Não ❌|Não ❌|Sim ✅|Sim ✅|Sim ✅|
|Altos requisitos de confiabilidade|Não ❌|Não ❌|Sim ✅|Sim ✅|Sim ✅|Não ❌|Não ❌|Não ❌|
|Cronograma apertado do projeto|Não ❌|Sim|Sim ✅|Sim ✅|Sim ✅|Sim ✅|Sim ✅|Sim ✅|
|Os recursos (tempo, dinheiro, pessoas, etc.) são escassos?|Não ❌|Sim ✅|Não ❌|Não ❌|Sim ✅|Não ❌|Sim ✅|Sim ✅|
|**Total**|1|4|1|1|3|3|4||
|**Total Geral**|4|12|7|7|8|10|12||

## 4 Engenharia de Requisitos

**Engenharia de Requisitos** é o processo de identificar, analisar, documentar e gerenciar os requisitos de um sistema. Seu objetivo é garantir que as necessidades e expectativas dos stakeholders (como clientes e usuários) sejam corretamente compreendidas e transformadas em especificações claras para o desenvolvimento do software, com base em **técnicas e práticas**.

**Técnicas** são métodos ou abordagens usadas para coletar, analisar e validar os requisitos. Exemplos incluem entrevistas, análise de personas, criação de cenários, entre outros. Essas técnicas ajudam a entender o que precisa ser desenvolvido.

**Práticas** são as atividades ou ações específicas que são realizadas durante o processo de engenharia de requisitos, como reuniões de planejamento, revisão de documentos ou validação com stakeholders. Elas são o que a equipe faz para aplicar as técnicas e atingir os objetivos de engenharia de requisitos.

## 4.1 Atividades e Técnicas de ER

### Planejamento da Release

- **Elicitação e descoberta:**
    - Entrevistas: As entrevistas utilizadas com o cliente da empresa Auto Rei tintas, será utilizada no sentido de entender melhor o que o cliente precisa - pela visão do desenvolvedor -, além de compreender melhor o problema enfrentado, além das funcionalidades necessárias para o projeto.
    - Brainstorming: o brainstorm serve como uma maneira de gerar várias ideias - mesmo que sejam amplas demais - com intuito de aumentar as possibilidades de funcionalidades e soluções para os problemas enfrentados pelo cliente.
- **Declaração:**
    - registro dos requisitos: serão demonstrados ao cliente os requisitos separadas para aquele lançamento em questão, e registrados.

### Planejamento da sprint

- **Análise e consenso:**
    - Análise de Personas: Com a análise das personas criadas, será utilizada pra entender melhor os usuários e a finalidade da aplicação.
    - Histórias: As histórias de usuário serão utilizadas para desenvolver as funcionalidades da aplicação, e puxar do backlog para sprint.
    - Cenário: De acordo com o cenário, compreender as prioridades da aplicação.
- **Verificação e Validação:**
    - Checklist de Validação: Criar os critérios de aceitação junto ao cliente, para melhor desenvolvimento.

### Daily

- **Verificação e Validação:**
    - Identificar tarefas bloqueadas: Identificar tarefas onde alguns membros podem estar parados, quanto mais rápido essa identificação melhor para equipe.
    - Discutir possíveis soluções: Com as tarefas bloqueadas identificadas, é possível conversar sobre possíveis soluções com os outros membros da equipe. Novas ideias podem surgir e solucionar o bloqueio.
- **Análise e consenso:**
    - Utilizar ferramentas visuais como Kanban ou Quadro de tarefas para rastrear o progresso: A utilização de ferramentas para monitoramento de tarefas pode ser muito efetivo para equipe ter uma atualização em tempo real de como as equipes lidam com as tarefas.
- **Organização e atualização:**
    - Integração contínua: Verificar se o código integrado está alinhado com os critérios de aceitação.

### Execução da Sprint

- **Representação**
    - prototipagem: As prototipagens serão utilizadas a fim de demonstrar ao cliente as funcionalidades e entender se estão de acordo com o desejado.
- **Verificação e Validação**
    - revisão de requisitos: A revisão dos requisitos ocorrerá concomitantemente com a atividade de representação de modo a registrar e alterar as mudanças necessárias para o projeto vindas do cliente e da equipe em si.
- **Organização e atualização**
    - revisão do backlog: durante a execução da sprint, o backlog será constantemente atualizado de modo a identificar quais tarefas estão em andamento, finalizadas ou ainda presentes no backlog.

### Sprint Review

- **Declaração:**
    - user story: As user’s storys serão demonstradas ao cliente a fim de comunicá-lo sobre a intuição da funcionalidade a ser representada
- **Organização e atualização:**
    - feedback: o feedback da equipe será necessário para que consigamos nos informar sobre quais as tarefas que foram finalizadas com sucesso, e quais não foram, a fim de manter todos no mesmo caminhar.
- Verificação e validação:
    - DoR e DoD: Após a validação e verificação dos requisitos, se poderá ter uma noção maior das definições de pronto para iniciar o desenvolvimento e de finalizado
    - qualidade de requisitos: a qualidade dos requisitos será garantida após a verificação e validação deles.

### Retrospectiva

- **organização e atualização:**
    - **durante a retrospectiva, atualizaremos o backlog com fase no feedback da equipe dada o desempenho dela e de como foi a sprint em si.**

## 4.2 Engenharia de Requisitos e o ScrumXP

| Fase do Processo        | Atividades ER                  | Prática                                                                                                 | Técnica                                                                                            | Resultado Esperado                                                                                  |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Planejamento da Release | Elicitação e  <br>Descoberta   | Levantamento  <br>de Requisitos                                                                         | Entrevistas,  <br>Brainstorming                                                                    | Requisitos de alto nível  <br>identificados e  <br>Objetivos da release  <br>bem definidos          |
|                         | Declaração                     | Registro dos  <br>Requisitos                                                                            | Temas, Épicos e User  <br>Stories                                                                  | Histórias de usuário documentadas que descrevem os requisitos da versão de maneira clara e objetiva |
|                         |                                |                                                                                                         |                                                                                                    |                                                                                                     |
| Planejamento da Sprint  | Análise e consenso             | Reunião de Planejamento                                                                                 | Análise de Personas, Histórias e Cenários                                                          | Lista de Personas, Histórias priorizadas                                                            |
|                         | Verificação e Validação        | Entrevistas com Stakeholders, Revisão de documento                                                      | Checklist de Validação, Entrevista                                                                 | Resultados do Checklist, Critérios de aceitação definidos                                           |
| Daily                   | Verificação e validação        | 1 perguntas:  <br>- Há algum impedimento?                                                               | Identificar tarefas bloqueadas e discutir possíveis soluções                                       | Transparência: Impedimentos são identificados e comunicados rapidamente                             |
|                         | Analise e consenso             | 3 perguntas:  <br>- O que foi feito ontem?  <br>- O que será feito hoje?  <br>-Há algum impedimento?    | Utilizar ferramentas visuais como Kanban ou Quadro de tarefas para rastrear o progresso            | Equipe alinhada: Todos saberem o que foi feito, o que será feito e desafios existentes              |
|                         | Organização e validação        | Promover comunicação aberta e colaboração                                                               | Integração contínua: Verificar se o código integrado está alinhado com os requisitos estabelecidos | Planejamento ajustado: Atualizações feitas nos requisitos ou tarefas para atender à sprint          |
|                         |                                |                                                                                                         |                                                                                                    |                                                                                                     |
| Execução da Sprint      | representação                  | Prototipação (criação de uma representação visual)                                                      | Protótipo com uso de frameworks como figma                                                         | Uma visualização que oriente a equipe de desenvolvimento na implementação                           |
|                         | Verificação e  <br>Validação   | Validar requisitos                                                                                      | Revisar os requisitos com base nos critérios de aceitação                                          | Garantir que requisitos estão de acordo com os critérios de aceitação e qualidade                   |
|                         | Organização e  <br>Atualização | Revisão do  <br>Backlog                                                                                 | Revisão do Backlog da  <br>Sprint                                                                  | Backlog atualizado e  <br>alinhado com os  <br>objetivos da sprint em  <br>andamento                |
|                         |                                |                                                                                                         |                                                                                                    |                                                                                                     |
| Sprint Review           | Declaração                     | comunicar-se com o cliente sobre a funcionalidade do produto através de ações as quais ele poderá fazer | User Story                                                                                         | user story, regras de negócio                                                                       |
|                         | Organização e atualização      | comunicar-se entre a equipe sobre o andamento das tarefas e atividades                                  | feedback                                                                                           | Backlog de Requisitos                                                                               |
|                         | Verificação e atualização      | serão verificados e validados os requisitos                                                             | Roteiro de Validação, Roteiro de Verificação                                                       | DoD, DoR, quallidade de requisitos                                                                  |
|                         |                                |                                                                                                         |                                                                                                    |                                                                                                     |
| Retrospectiva           | organização e atualização      | comunicar-se entre a equipe sobre o andamento das tarefas e atividades                                  | feedback                                                                                           | Backlog de Requisitos, Visão de Produto                                                             |

## Histórico de Versões

| Versão |    Data     | Descrição                                 | Autor(es)                                        | Revisor(es)                                                                                                                                                                                                                                           |
| ------ | :---------: | ----------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.0`  | 26/11/2024  | Criação do Documento                      |  [Paulo Henrique](https://github.com/Nanashii76) |    [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza)       |
