## **Casos de Uso**

Um caso de uso é uma descrição de como um usuário (ator) interage com um sistema para alcançar um objetivo específico. Ele define o comportamento esperado do sistema em diferentes cenários, incluindo fluxos principais e alternativos.

## **ConnectCare**

### 1. Breve descrição

O estudo de caso se trata de um aplicativo ConnectCare, o qual tem o objetivo de fazer com que pessoas e comunidades em situação de vulnerabilidade tenham um acesso maior à saúde, podendo marcar consultas, localizar serviços. Garantindo que comunidades vulneráveis tenham acesso facilitado e eficiente a serviços de saúde, a fim de promover o bem-estar social.

---

### 1.1 Atores

- Paciente: representa as pessoas que estão consumindo o produto a fim de realizar consultas.
- Médico: a pessoa na qual irá consultar os pacientes.
- Enfermeiro: será responsável por auxiliar no tratamento do paciente na clinica.
- Agente comunitário: irá realizar campanhas
. engedúas ed
- Profissional da saúde:
- Clínica: 

---

### 2. Fluxo Básico de Eventos

#### 2.1 Cadastrar Perfil de Pacientes

1. O paciente seleciona "Cadastrar perfil" no aplicativo.
2. O sistema exibe um formulário com campos brigatórios como: `nome`, `idade`, `endereço` e `condições de saúde ...`
3. O paciente preenche os dados e confirma
4. O sisteema verifica a completude dos dados
5. O sistema salva o perfil e exibe uma mensagem de sucesso: "Perfil cadastrado com sucesso!"

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

#### **3.1.1 Atualizar Perfil de Pacientes (2.1)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Editar dados pessoais (nome, idade)| Atualizar histórico médico        | Validar campos obrigatórios       |

#### **3.1.2 Consultar Perfil de Paciente (2.1)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Visualizar dados básicos          | Acessar histórico de consultas    | Filtrar por período/data          |

#### **3.1.3 Remover Perfil de Paciente (2.1)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Solicitar exclusão                | Confirmar ação via autenticação   | Excluir dados permanentemente     |

---

#### **3.2.1 Atualizar Perfil Profissional (2.8)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Modificar especialização          | Atualizar agenda de atendimento   | Validar credenciais profissionais |

#### **3.2.2 Consultar Perfil Profissional (2.8)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Visualizar disponibilidade        | Acessar histórico de pacientes    | Filtrar por especialidade         |

#### **3.2.3 Remover Perfil Profissional (2.8)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Solicitar desativação             | Confirmar ação via autenticação   | Remover acesso ao sistema         |

---

#### **3.3.1 Atualizar Campanha Comunitária (2.10)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Editar detalhes da campanha       | Modificar público-alvo            | Revalidar datas e locais          |

#### **3.3.2 Consultar Campanha Comunitária (2.10)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Visualizar campanhas ativas       | Filtrar por localização           | Acessar métricas de participação  |

#### **3.3.3 Remover Campanha Comunitária (2.10)**
| Área de Funcionalidade (A1)       | Área de Funcionalidade (A2)       | Área de Funcionalidade (A3)       |
|-----------------------------------|-----------------------------------|-----------------------------------|
| Solicitar encerramento            | Confirmar ação via autenticação   | Excluir registros da campanha     |


---

### 4. Fluxos de Exceção

#### Fluxo de Exceção (FE1)

#### Fluxo de Exceção (FE2)

#### Fluxo de Exceção (FE3)

---

### 5. Pré-Condições

#### ...

---

### 6. Pós-Condições

#### ...

---

### 7. Pontos de Extensão

#### ...

---

### 8. Requisitos Especiais

#### ...

---

### 9. Informações Adicionais
