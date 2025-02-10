## **Casos de Uso**

Um caso de uso é uma descrição de como um usuário (ator) interage com um sistema para alcançar um objetivo específico. Ele define o comportamento esperado do sistema em diferentes cenários, incluindo fluxos principais e alternativos.

## **ConnectCare**

### 1. Breve descrição

O estudo de caso se trata de um aplicativo ConnectCare, o qual tem o objetivo de fazer com que pessoas e comunidades em situação de vulnerabilidade tenham um acesso maior à saúde, podendo marcar consultas, localizar serviços. Garantindo que comunidades vulneráveis tenham acesso facilitado e eficiente a serviços de saúde, a fim de promover o bem-estar social.

---

### 1.1 Atores

- **Paciente**: representa as pessoas que estão consumindo o produto a fim de realizar consultas.
- **Médico**: a pessoa na qual irá consultar os pacientes.
- **Enfermeiro**: será responsável por auxiliar no tratamento do paciente na clinica.
- **Agente comunitário**: irá realizar campanhas comunitárias de saúde
- **Profissional da saúde**: engloba os enfermeiros, aagentes comunitários e médicos
- **Clínica**: irá cadastrar as campanhas comunitárias

---

### Casos de Uso

| ID   | Casos de Uso                                       |
| ---- | -------------------------------------------------- |
| UC01 | Cadastrar Perfil de Pacientes                      |
| UC02 | Agendar Consulta                                   |
| UC03 | Acessar Notificação                                |
| UC04 | Visualizar Histórico de Consulta                   |
| UC05 | Realizar Login                                     |
| UC06 | Visualizar Agenda de Consulta                      |
| UC07 | Gerar Relatório de Paciente                        |
| UC08 | Cadastrar Perfil Profissional                      |
| UC09 | Disponibilizar Canal de Comunicação com o Paciente |
| US10 | Cadastrar Campanha Comunitária                     |

### 2. Fluxo Básico de Eventos

#### 2.1 Cadastrar Perfil de Pacientes

2.1.1. Cliente acessa o aplicativos\
2.1.2. cliente seleciona a opção “fazer cadastro”\
2.1.3. O sistema exibe um formulário com campos brigatórios como: `nome`, `idade`, e `condições de saúde preexistentes`\
2.1.4. cliente preenche como nome FE1, FE2, RN03\
2.1.5. cliente informa idade FE1, FE3\
2.1.6. cliente informa condições de saúde preexistentes\
2.1.7. cliente confirma a opção “criar conta”\
2.1.8. sistema cria a conta  RN01,  RN02

#### 2.2 Agendar Consulta

1. O paciente abre o aplicativo
2. o sistema requer login
3. o paciente insere os dados de login e clica em logar
4. O sistema exibe as opções de serviços de saúde
5. O paciente seleciona a opção `agendar consulta`
6. O sistema exibe opções de filtragem (localização de postos de saúde próximos, especialidade, data)
7. O paciente escolhe o local mais conveniente e algum horário disponível e confirma
8. O sistema envia uma notificação com detalhes da consulta (local, documentos necessários)

#### 2.3 Acessar Notificação

...

#### 2.4 Visualizar Histórico de Consulta

...

#### 2.5 Realizar Login

...

#### 2.6 Visualizar Agenda de Consulta

...

#### 2.7 Gerar Relatório de Paciente

...

#### 2.8 Cadastrar Perfil Profissional

...

#### 2.9 Disponibilizar Canal de Comunicação com o Paciente

...

#### 2.10 Cadastrar Campanha Comunitária

...

---

### 3. Fluxos Alternativos

#### 3.1 Cadastrar Perfil de Pacientes
Não se aplica



---

### 4. Fluxos de Exceção
#### 4.1 Cadastrar Perfil de Pacientes

#### 4.1.1 [FE01] --- Cliente não digita as informações necessárias

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
No passo 2.1.4 do fluxo básico, caso o cliente não informe um nome, ou no passo 2.1.5, deixe de informar uma idade o sistema o impedirá de criar uma conta no passo 2.1.8.<br><br>
  </div>
</div>

#### 4.1.2 [FE02] --- Paciente já possui conta no sistema

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
    No passo 2.1.4 do fluxo básico, caso o cliente informe um nome já existente no banco de dados, o sistema o informará que já há uma conta em seu nome no passo 2.1.8.<br><br>
  </div>
</div>

#### 4.1.3 [FE03] --- Idade inválida

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
No passo 2.1.5 do fluxo básico, caso o cliente informe um valor invalido, como 200, o sistema o impedirá de criar uma conta no passo 2.1.8.
    <br><br>
  </div>
</div>

#### Fluxo de Exceção (FE1)

#### Fluxo de Exceção (FE2)

#### Fluxo de Exceção (FE3)

---

### 5. Pré-Condições
#### 5.1 Cadastrar Perfil de Pacientes
- 5.1.1  Paciente não fez login
- 5.1.2  Paciente não possui cadastro

#### ...

---

### 6. Pós-Condições
#### 6.1 Cadastrar Perfil de Pacientes
- 6.1.  Cliente retorna com o login já realizado

#### ...

---

### 7. Pontos de Extensão
#### 7.1 Cadastrar Perfil de Pacientes
Não se aplica

#### ...

---

### 8. Requisitos Especiais
#### 7.1.1 Cadastrar Perfil de Pacientes
#### 8.1.1 --- Esse caso de uso deve ser acessível
- Usuário deve ser capaz de cadastrar um paciente em dispositivos simples e com conexões de internet limitadas

#### ...

---

### 9. Informações Adicionais
