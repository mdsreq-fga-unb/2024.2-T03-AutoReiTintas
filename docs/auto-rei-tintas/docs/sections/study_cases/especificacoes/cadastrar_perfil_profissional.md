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
_Este caso de uso permite que profissionais da saúde criem seu perfil, para conseguir realizar trabalhos pela plataforma._

---

<a id="atores"></a>

### 1.2. Atores
- **Profssional da Saúde**: Médico ou Enfermeiro.

---

<a id="fluxo-de-eventos"></a>

## 2. Fluxo de eventos

<a id="fluxo-principal"></a>

### 2.1. Fluxo principal

  2.1.1. O Profissional da saúde acessa o aplicativo. <br><br>

  2.1.2. O Profissional da saúde seleciona a opção "Realizar Cadastro de Profissional de Saúde". <br><br>

  2.1.3. O sistema exibe um formulário com campos obrigatórios como: `nome`, `idade`, `Especializações` e `Horários de disponibilidade`. **(RN01)** **(RN02)** <br><br>

  2.1.4 O profissional da saúde preenche todos os campos. <br><br>

  2.1.5 O sistema valida os campos obrigatórios. **(RN01)** **(RN02)** **(FE01)** **(FE02)**<br><br>

  2.1.6 O sistema mostra uma notificacão na tela, com a mensagem "Perfil criado com sucesso!". **(FE03)** <br><br>

---

<a id="fluxos-alternativos"></a>

### 2.2. Fluxos alternativos

- Não se aplica. <br>

---

<a id="fluxos-de-excecao"></a>

### 2.3. Fluxos de exceção

#### 2.3.1. [FE01] Campo Especialização

No passo **2.1.3**, no campo de especialização: <br><br>
- O Profissional de saúde precisa comprovar por meio de documentos sua especialização. <br><br>
- Os documentos de especialização é validado a autenticidade.

#### 2.3.2. [FE02] Horários

No passo **2.1.3**, caso o profissional digite um horário: <br><br>
- Inexistente: O padrão de horário é 24h, caso seja diferente o campo não é validado. <br>
- Horário deve ter começo e fim, sendo a hora de entrada menor que a de término, caso contrário o campo não é validado. <br><br>

#### 2.3.3. [FE03] Erro ao cadastrar o perfil

No passo **2.1.6**, caso tenha acontecido algum erro na hora do cadastro, mesmo após o profissional ter preenchido corretamente os campos, aparece uma notificação de erro, com a mensagem "Erro ao criar Perfil, tente novamente mais tarde". <br><br>

---

<a id="requisitos-especiais"></a>

## 3. Requisitos Especiais
- **R1**: Funcionar em dispositivos básicos com conexão limitada à internet.<br>

---

<a id="regras-de-negocio"></a>

## 4. Regras de negócio

### 4.1. [RN01] Campo de Especialização
No passo **2.1.3** e **2.1.5** do fluxo principal, para que o sistema permita o cadastro de um profissional da saúde, é necessário o campo `Registrar Especializações`, com espaço para o updload de um arquivo de comprovação de tal.


### 4.2. [RN02] Campo de Horário disponível.
No passo **2.1.3** e **2.1.5** do fluxo principal, para que o sistema permita o cadastro de um profissional de saúde, é necessário o campo de `Horários Disponíveis`, com validação do sistema para o horário **(FE02)**.

---

<a id="pre-condicoes"></a>

## 5. Pré-condições
- **PC1**: O profissional não possui cadastro no sistema.<br>
- **PC2**: O profissional deve ter formação e permissão para exercer a profissão. <br>

---

<a id="pos-condicoes"></a>

## 6. Pós-condições
- **PO1**: Após a validação da autencidade dos documetos do profissional, o sistema envia um email com:<br>
-- Documento **aceito** e sucesso no cadastro da conta.<br>
-- Documento **inválido** e espaço para o envio novamente de um documento válido.<br>
- **PO2**: O profissional recebe um email com regras e boas práticas da plataforma. <br>

---

<a id="pontos-de-extensao"></a>

## 7. Pontos de extensão
- Não se aplica.<br>

---

## Histórico de Versões

| Versão |    Data    | Descrição            | Autor(es)                                        | Revisor(es)                                                                               |
| ------ | :--------: | -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `1.0`  | 10/02/2025 | Criação do documento | [Diogo Barboza](https://github.com/Diogo-Barboza) | [Johan](https://github.com/johan-rocha) |
