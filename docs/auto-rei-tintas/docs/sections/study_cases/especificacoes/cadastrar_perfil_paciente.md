
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

## 1. Caso de uso

## <a id="breve-descricao">Cadastrar Perfil de Pacientes</a>

### 1.1. Breve descrição
_Este caso de uso é utilizado pelos clientes para cadastrar uma conta de paciente no sistema da clinica_

<a id="atores"></a>

### 1.2. Atores

- Paciente não cadastrado no sistema

 

<a id="fluxo-de-eventos"></a>

## 2. Fluxo de eventos

<a id="fluxo-principal"></a>

### 2.1. Fluxo principal

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">

  
- 2.1.1 Cliente acessa o aplicativos <br><br>

- 2.1.2 cliente seleciona a opção “fazer cadastro” <br><br>

- 2.1.3 O sistema exibe um formulário com campos obrigatórios como: `nome`, `idade`, e `condições de saúde preexistentes` <br><br>

- 2.1.4 cliente preenche como nome FE01, FE02, RN03 <br><br>

- 2.1.5 cliente informa idade FE01, FE03 <br><br>

- 2.1.6 cliente informa condições de saúde preexistentes <br><br>

- 2.1.7 cliente confirma a opção “criar conta” <br><br>

- 2.1.8 sistema cria a conta RN01, RN02 <br><br>


    </div>
  </div>

<a id="fluxos-alternativos"></a>

### 2.2. Fluxos alternativos



<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
  Não se aplica


  </div>
</div>

<a id="fluxos-de-excecao"></a>

### 2.3. --- Fluxos de exceção

#### 2.3.1. [FE01] --- Cliente não digita as informações necessárias

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
No passo 2.1.4 do fluxo básico, caso o cliente não informe um nome, ou no passo 2.1.5, deixe de informar uma idade o sistema o impedirá de criar uma conta no passo 2.1.8.<br><br>
  </div>
</div>

#### 2.3.2. [FE02] --- Paciente já possui conta no sistema

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
    No passo 2.1.4 do fluxo básico, caso o cliente informe um nome já existente no banco de dados, o sistema o informará que já há uma conta em seu nome no passo 2.1.8.<br><br>
  </div>
</div>

#### 2.3.3. [FE03] --- Idade inválida

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
No passo 2.1.5 do fluxo básico, caso o cliente informe um valor invalido, como 200, o sistema o impedirá de criar uma conta no passo 2.1.8.
    <br><br>
  </div>
</div>

<a id="requisitos-especiais"></a>

## 3. Requisitos Especiais

### 3.1. --- Esse caso de uso deve ser acessível
- Usuário deve ser capaz de cadastrar um paciente em dispositivos simples e com conexões de internet limitadas


<a id="regras-de-negocio"></a>

## 4. Regras de negócio

### 4.1. [RN01]  Validação dos dados

| Nome | Formato | Obrigatoriedade | valores |
| ---- | :-----: | :-------------: | :-----: |
|   Nome   | até 100 caracteres        |       sim          |    -    |
|   Idade   |     Apenas números (000)     |       sim          |    -    |


### 4.2. [RN02] Confirmação de preenchimento
No passo 2.1.8 para que o sistema crie a conta, é preciso que os passos 2.1.4 e 2.1.5 sejam não nulas.

### 4.3. [RN03] --- Validação do nome
No passo 2.1.8 o sistema deve validar que o nome inserido não é pre-existente no banco de dados da clínica


<a id="pre-condicoes"></a>

## 5. Pré-condições

- 5.1 --- Paciente não fez login
- 5.2 --- Paciente não possui cadastro


<a id="pos-condicoes"></a>

## 6. Pós-condições

- 6.1. --- Cliente retorna com o login já realizado

<a id="pontos-de-extensao"></a>

## 7. Pontos de extensão
Não se aplica

## Histórico de Versões

| Versão |    Data    | Descrição | Autor(es)               | Revisor(es) |
| ------ | :--------: | --------- | ----------------------- | ----------- |
| `1.0`  | 08/02/2025 | ---       | Mateus Cavalcante |      Mariana       |