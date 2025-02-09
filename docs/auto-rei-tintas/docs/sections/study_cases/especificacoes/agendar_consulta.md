## Sumário

1. [Breve Descrição](#breve-descricao)<br>
   1.2. [Atores](#atores)<br>
2. [Fluxo de eventos](#fluxo-de-eventos)<br>
   2.1. [Fluxo principal](#fluxo-principal)<br>
   2.2. [Fluxos alternativos](#fluxos-alternativos)<br>
   2.3. [Fluxos de Exceção](#fluxos-de-excecao)<br>
3. [Requisitos Especiais](#requisitos-especiais)<br>
4. [Regras de negócio](#regras-de-negocio)<br>
5. [Precondições](#pre-condicoes)<br>
6. [Pós-condições](#pos-condicoes)<br>
7. [Pontos de extensão](#pontos-de-extensao)<br>

---

## 1. Caso de uso

<a id="breve-descricao"></a>

### 1.1. Breve descrição
Permitir que pacientes agendem consultas médicas online ou presenciais, com base em disponibilidade de profissionais e serviços de saúde próximos. O sistema oferece confirmação automática, orientações personalizadas e integração com histórico médico.

---

<a id="atores"></a>

### 1.2. Atores
- **Paciente**: Usuário que agenda ou cancela a consulta.
- **Sistema ConnectCare**: Responsável por validar disponibilidade, enviar notificações e processar cancelamentos.

---

<a id="fluxo-de-eventos"></a>

## 2. Fluxo de eventos

<a id="fluxo-principal"></a>

### 2.1. Fluxo principal

  2.1.1. O paciente acessa a seção "Buscar Serviços de Saúde" no aplicativo.<br><br>

  2.1.2. O sistema lista clínicas, hospitais e campanhas próximas com base na localização do paciente.<br><br>

  2.1.3. O paciente seleciona uma unidade de saúde e visualiza os horários disponíveis.<br><br>

  2.1.4. O paciente escolhe um horário e confirma o agendamento.<br><br>

  2.1.5. O sistema envia uma confirmação automática com detalhes (local, data, documentos necessários).<br><br>

  2.1.6. O paciente recebe notificações pré-consulta (ex: lembrete de máscara).<br><br>

---

<a id="fluxos-alternativos"></a>

### 2.2. Fluxos alternativos

#### 2.2.1. [FA01] Cancelar consulta agendada

No passo **2.1.6** do fluxo principal, o paciente decide cancelar a consulta:<br><br>

2.2.1.1. O paciente acessa a seção "Minhas Consultas" no aplicativo.<br><br>
2.2.1.2. O sistema exibe a consulta agendada com a opção "Cancelar".<br><br>
2.2.1.3. O paciente confirma o cancelamento.<br><br>
2.2.1.4. O sistema libera o horário e envia confirmação de cancelamento ao paciente e à unidade de saúde.<br><br>

---

<a id="fluxos-de-excecao"></a>

### 2.3. Fluxos de exceção

#### 2.3.1. [FE01] Nenhum horário disponível

No passo **2.1.3**, se não houver horários:<br><br>
- O sistema sugere outras unidades ou datas.<br>
- O paciente pode optar por entrar em uma lista de espera.<br><br>

#### 2.3.2. [FE02] Falha na conexão com a internet

No passo **2.1.1**, se o paciente estiver offline:<br><br>
- O sistema exibe informações salvas localmente (ex: mapa offline).<br>
- O agendamento é armazenado e sincronizado posteriormente.<br><br>


---

<a id="requisitos-especiais"></a>

## 3. Requisitos Especiais
- **R1**: Funcionar em dispositivos básicos com conexão limitada à internet.<br>
- **R2**: Permitir cancelamento até 24 horas antes da consulta.<br>

---

<a id="regras-de-negocio"></a>

## 4. Regras de negócio

### 4.1. [RN01] Validação de horários

| Nome          | Formato       | Obrigatoriedade | Valores Aceitos         |
| ------------- | :-----------: | :-------------: | :---------------------: |
| Horário       | HH:MM         | Sim             | 08:00 - 18:00           |
| Disponibilidade| Numérico     | Sim             | > 0                     |

### 4.2. [RN02] Política de cancelamento
Cancelamentos devem ser feitos com no mínimo **24 horas de antecedência** para liberação do horário.

---

<a id="pre-condicoes"></a>

## 5. Pré-condições
- **PC1**: O paciente possui um perfil cadastrado no sistema.<br>
- **PC2**: A consulta já está agendada no sistema.<br>

---

<a id="pos-condicoes"></a>

## 6. Pós-condições
- **PO1**: O horário da consulta é liberado para novos agendamentos.<br>
- **PO2**: O paciente e a unidade de saúde recebem notificação de cancelamento.<br>

---

<a id="pontos-de-extensao"></a>

## 7. Pontos de extensão
- **PE1**: Adicionar opção de reagendamento automático durante o cancelamento.<br>
- **PE2**: Integrar penalidades para cancelamentos fora do prazo (ex: perda de pontos de fidelidade).<br>

---

## Histórico de Versões

| Versão |    Data    | Descrição            | Autor(es)                                        | Revisor(es)                                                                               |
| ------ | :--------: | -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `1.0`  | 09/02/2025 | Criação do documento | [Paulo Henrique](https://github.com/Nanashii76) | [Johan](https://github.com/johan-rocha) e [Mariana Letícia](https://github.com/Marianannn) |
