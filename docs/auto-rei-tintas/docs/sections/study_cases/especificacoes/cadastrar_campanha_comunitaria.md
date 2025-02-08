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

<a id="breve-descricao"></a>

### 1.1. Breve descrição

Este caso de uso permite Organizações Externas ao ConnectCare cadastrarem campanhas comunitárias com o objetivo de alcançar comunidades que necessitam delas. Além disso, os usuários receberão notificações para ter acesso às informações dessas campanhas comunitárias.

<a id="atores"></a>

### 1.2. Atores

- Organizações externas

<a id="fluxo-de-eventos"></a>

## 2. Fluxo de eventos

<a id="fluxo-principal"></a>

### 2.1. Fluxo principal

<div style="display: flex; justify-content: center;">
  <div style="text-align: left;">

2.1.1. O sistema apresenta a seguinte opção:<br>

- cadastrar campanha comunitária<br>

  2.1.2. A organização externa seleciona cadastrar campanha comunitária.<br><br>

  2.1.3. O sistema apresenta os dados que precisam ser preenchidos.<br><br>

  2.1.4. A organização escolhe o tipo de campanha comunitária a ser feita. [FA01]<br><br>

  2.1.5. A organização preenche os campos com os dados necessários e solicita a inclusão de uma nova campanha. [FE01] [FE02]<br><br>

  2.1.6. O sistema verifica os dados cadastrados.[FE02]<br><br>

  2.1.7. O sistema autoriza a inclusão de uma nova campanha comunitária.<br><br>

  2.1.8. O sistema apresenta uma mensagem relatando que o cadastro foi um sucesso.<br><br>

  2.1.9. O sistema notifica usuários da campanha cadastrada.<br><br>

  2.1.10. Fim do caso de uso.

    </div>
  </div>

<a id="fluxos-alternativos"></a>

### 2.2. Fluxos alternativos

#### 2.2.1. [FA01] Selecionar campanha de vacina

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
No passo 2.1.4. do fluxo básico de cadastro de campanha comunitária, a organização externa seleciona qual o tipo da campanha comunitária.<br><br>

2.2.1.1. A organização externa seleciona "campanha".<br><br>
2.2.1.2. O sistema mostra os tipos de campanha disponíveis.<br><br>
2.2.1.3. A organização seleciona o tipo de campanha desejada.<br><br>
2.2.1.4. A organização salva as informações.<br><br>
2.2.1.5. O sistema emite uma mensagem de sucesso.<br><br>

  </div>
</div>

<a id="fluxos-de-excecao"></a>

### 2.3. Fluxos de exceção

#### 2.3.1. [FE01] Organização externa não informou as dados necessárias

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
    No passo 2.1.6. do fluxo principal de cadastro de campanha comunitária, caso a organização externa não tenha informado todos os dados necessários, uma mensagem de aviso deverá aparecer nos campos avisando que essa seleção é obrigatória para a continuação do processo. A organização externa continuará a partir do passo 2.1.5.<br><br>
  </div>
</div>

#### 2.3.2. [FE02] Organização externa informou os dados incorretamente

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
    No passo 2.1.6. do fluxo principal de cadastro de campanha comunitária, caso a organização externa tenha informado os dados incoretamente, uma mensagem de aviso deverá aparecer nos campos incorretos avisando que os dados estão incorretos e precisam ser corrigidos para a continuação do processo. A organização externa continuará a partir do passo 2.1.5.<br><br>
  </div>
</div>

#### 2.3.3. [FE02] Organização externa informou data anterior a atual

<div style="display: flex; justify-content: center; text-align: center; width: 100%;">
  <div style="text-align: left; max-width: 800px; word-wrap: break-word;">
    No passo 2.1.6. do fluxo principal de cadastro de campanha comunitária, caso a organização externa tenha informado a data anterior à atual, uma mensagem de aviso deverá aparecer informando que a data não pode ser anterior a data atual e precisa ser corrigida para a continuação do processo. A organização externa continuará a partir do passo 2.1.5.<br><br>
  </div>
</div>

<a id="requisitos-especiais"></a>

## 3. Requisitos Especiais

### 3.1. Dispositivos

- O caso de uso deve ser acessível através de aparelhos mobile a partir do android 6.0.

<a id="regras-de-negocio"></a>

## 4. Regras de negócio

### 4.1. Validação de informações

| Nome                     |          Formato          | Obrigatoriedade |                          valores                          |
| ------------------------ | :-----------------------: | :-------------: | :-------------------------------------------------------: |
| Nome da campanha         | texto até 500 caracteres  |       Sim       |                             -                             |
| Tipo da campanha         |             -             |       Sim       | vacinação; palestra esducacional; atendimento; preventiva |
| Período/data da campanha |  11/11/1111 a 11/11/1111  |       Sim       |                             -                             |
| Descrição da campanha    | texto até 2000 caracteres |       Sim       |                             -                             |
| Local da campanha        | texto até 500 caracteres  |       Sim       |                             -                             |

<a id="pre-condicoes"></a>

## 5. Pré-condições

<a id="pos-condicoes"></a>

## 6. Pós-condições

<a id="pontos-de-extensao"></a>

## 7. Pontos de extensão


## Histórico de Versões

| Versão |    Data    | Descrição                                 | Autor(es)                                       | Revisor(es)                                    |
| ------ | :--------: | ----------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| `1.0`   | 08/02/2025 | Criação do documento                        | [Mariana Letícia](https://github.com/Marianannn) |     [Johan](https://github.com/johan-rocha) e [Paulo Henrique](https://github.com/Nanashii76)     | 