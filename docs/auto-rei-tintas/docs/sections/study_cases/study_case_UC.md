## **Casos de Uso**

Um caso de uso é uma descrição de como um usuário (ator) interage com um sistema para alcançar um objetivo específico. Ele define o comportamento esperado do sistema em diferentes cenários, incluindo fluxos principais e alternativos.

## **ConnectCare**

### 1. Breve descrição

O estudo de caso se trata de um aplicativo ConnectCare, o qual tem o objetivo de fazer com que pessoas e comunidades em situação de vulnerabilidade tenham um acesso maior à saúde, podendo marcar consultas, localizar serviços. Garantindo que comunidades vulneráveis tenham acesso facilitado e eficiente a serviços de saúde, a fim de promover o bem-estar social.

---

### Diagrama de Casos de Uso desenvolvido para Connect Care:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLmKgmMQ=/?moveToViewport=-4926,-953,3073,2933&embedId=881065831680" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

<center>

![diagrama de caso de uso](https://mdsreq-fga-unb.github.io/2024.2-T03-AutoReiTintas/assets/diagrama_UC.jpg)

</center>

### Casos escolhidos
- **[Cadastrar Perfil de Paciente](./especificacoes/cadastrar_perfil_paciente.md)** <br>
- **[Agendar Consulta](./especificacoes/agendar_consulta.md)** <br>
- **[Cadastrar Campanha Comunitária](./especificacoes/cadastrar_campanha_comunitaria.md)** <br>
- **[Cadastrar Campanha Comunitária](./especificacoes/cadastrar_campanha_comunitaria.md)** <br>
- **[Visualizar histórico de consulta](./especificacoes/visualizar_historico_consulta.md)** <br>


### Levantamento de Estudos de Caso

| **Ator**                     | **Caso de Uso**                               | **Descrição** |
|------------------------------|----------------------------------------------|--------------|
| **Paciente**                 | **[Cadastrar Perfil de Paciente](./especificacoes/cadastrar_perfil_paciente.md)**                | O paciente pode criar um perfil no sistema de saúde. |
|                              | Atualizar Perfil de Paciente                | O paciente pode modificar seus dados cadastrais. |
|                              | Consultar Histórico Pessoal                 | Permite ao paciente visualizar seu histórico médico. |
|                              | Remover Perfil de Paciente                  | O paciente pode excluir seu perfil do sistema. |
|                              | **[Visualizar Histórico de Consulta](./especificacoes/visualizar_historico_consulta)**                 | O paciente pode ver as consultas agendadas. |
|                              | Remarcar Consulta                           | O paciente pode alterar a data/hora de uma consulta previamente agendada. |
|                              | **[Agendar Consulta](./especificacoes/agendar_consulta.md)**                            | Permite ao paciente marcar uma nova consulta. |
|                              | **→ include: Localizar Postos de Saúde Próximos** | O sistema pode sugerir postos de saúde próximos ao paciente ao agendar uma consulta. |
| **Profissional da Saúde**    | Gerenciar Perfil de Profissioanal de Saúde                | O profissional pode acessar e modificar informações de Profissioanal de Saúdes. |
|                              | **[Cadastrar Histórico do Profissioanal de Saúde](./especificacoes/cadastrar_perfil_profissional.md)** | Permite ao profissional adicionar informações ao histórico do Profissioanal de Saúde. |
|                              | Consultar Histórico do Profissioanal de Saúde             | O profissional pode visualizar o histórico médico do Profissioanal de Saúde. |
|                              | Atualizar Histórico do Profissioanal de Saúde             | Permite modificar registros anteriores do histórico do Profissioanal de Saúde. |
|                              | Remover Histórico do Profissioanal de Saúde               | O profissional pode excluir registros do histórico. |
|                              | Realizar Atendimento                        | O profissional realiza o atendimento ao paciente. |
|                              | **→ include: Consultar Prontuário**         | Durante o atendimento, o profissional pode acessar o prontuário do paciente. |
|                              | **→ extend: Prescrever Medicamento**        | Durante o atendimento, o profissional pode prescrever medicamento, se necessário. |
|                              | Consultar Prescrição                        | O profissional pode visualizar prescrições médicas já emitidas. |
| **Agente Comunitário**       | Registrar Visita Domiciliar                         | O agente pode cadastrar informações sobre a residência do paciente. |
|                              | Gerar Relatório de comunidade                   | O agente pode registrar eventos de saúde pública no sistema. |
|                              | Notificar Problema de Saúde              | O agente pode comunicar informações relevantes sobre saúde pública. |
| **Órgãos Externos de Saúde** | **[Cadastrar Campanha Comunitária](./especificacoes/cadastrar_campanha_comunitaria.md)**           | Órgãos externos podem cadastrar campanhas de saúde comunitária. |
|                              | Atualizar Campanha Comunitária            | Permite consultas sobre informações de saúde pública. |
|                              | Consultar Campanha Comunitário                | Órgãos podem visualizar dados de saúde pública coletados. |
|                              | Remover Campanha Comunitárias           | Os órgãos externos remover dados de saúde pública com o sistema. |
| **Administrador do Sistema** | Criar notificação de sistema               | Permite a criação de notificações com o intuito de avisar usuários sobre campanhas comunitárias. |
|                              | Gerenciar conteúdo do sistema                         | O administrador pode criar, modificar ou excluir conteúdos informativos do sistema. |
|                              | Gerenciar Configuração do Sistema           | O administrador pode alterar configurações gerais do sistema. |
|                              | Gerenciar Permissões de usuário                       | Define permissões para os diferentes usuários do sistema. |


## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| `1.0` | 20/01/2025 | Criação do Documento | [Mariana Letícia](https://github.com/Marianannn) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.1` | 06/02/2025 | Adição do quadro Miro | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) e [Diogo](https://github.com/Diogo-Barboza) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `2.0` | 11/02/2025 | Criação da Tabela de casos de uso gerais | [Paulo Henrique](https://github.com/Nanashii76) | [Mariana Letícia](https://github.com/Marianannn), [Johan](https://github.com/johan-rocha), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |