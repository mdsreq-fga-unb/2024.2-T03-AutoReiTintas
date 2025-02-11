## Sumário

1. [Breve Descrição](#11-breve-descricao)  
   1.2. [Atores](#12-atores)  
2. [Fluxo de eventos](#2-fluxo-de-eventos)  
   2.1. [Fluxo principal](#21-fluxo-principal)  
   2.2. [Fluxos alternativos](#22-fluxos-alternativos)  
   2.3. [Fluxos de Exceção](#23-fluxos-de-excecao)  
3. [Requisitos Especiais](#3-requisitos-especiais)  
4. [Regras de negócio](#4-regras-de-negocio)  
5. [Precondições](#5-precondicoes)  
6. [Pós-condições](#6-pos-condicoes)  
7. [Pontos de extensão](#7-pontos-de-extensao)  

## 1. Visualizar histórico de consulta

### 1.1. Breve descrição

Este caso de uso permite que profissionais da saúde acessem e consultem o histórico de atendimentos de um paciente, facilitando a obtenção de informações detalhadas para embasar diagnósticos e tratamentos.

### 1.2. Atores

- Profissional da saúde

## 2. Fluxo de eventos

### 2.1. Fluxo principal

1. O profissional da saúde acessa a opção "visualizar histórico do paciente".
2. O sistema retorna uma página com registros de consultas anteriores, resultados de exames e dados relevantes fornecidos pelo próprio usuário.
3. O profissional da saúde acessa a opção "visualizar histórico de consultas anteriores".
4. O sistema retorna uma página com registros de todas as consultas do paciente.

### 2.2. Fluxos alternativos

#### [FA01] O sistema não retorna nada devido a um erro de comunicação

1. No passo 2 do fluxo principal, ocorre uma falha na conexão com o banco de dados.
2. O sistema exibe uma mensagem de erro informando que não foi possível recuperar os dados.
3. O profissional pode tentar recarregar a página ou entrar em contato com o suporte.

#### [FA02] O profissional seleciona a opção incorreta

1. No passo 1 do fluxo principal, o profissional escolhe uma opção que não está relacionada ao histórico do paciente.
2. O sistema exibe uma mensagem informando que a opção selecionada não é válida.
3. O profissional retorna à tela anterior e seleciona a opção correta.

### 2.3. Fluxos de Exceção

#### [FE01] Paciente sem histórico registrado

1. No passo 2 do fluxo principal, o sistema verifica que o paciente não possui registros de consultas anteriores.
2. O sistema exibe uma mensagem informando que não há histórico disponível para esse paciente.

#### [FE02] Erro interno do sistema

1. Em qualquer etapa do fluxo principal, ocorre uma falha inesperada no sistema.
2. O sistema exibe uma mensagem de erro genérica e solicita que o usuário tente novamente mais tarde.

## 3. Requisitos Especiais

- O sistema deve garantir a segurança e a confidencialidade dos dados do paciente.
- Somente profissionais autorizados podem acessar o histórico de consultas.

## 4. Regras de negócio

| Nome | Formato | Obrigatoriedade | Valores |
| --- | --- | --- | --- |
| Identificação do paciente | String | Obrigatório | CPF ou Código Interno |
| Data da consulta | DateTime | Obrigatório | AAAA-MM-DD HH:MM |
| Tipo de consulta | String | Opcional | Consulta, Exame, Cirurgia |
| Diagnóstico | Texto | Opcional | Livre |
| Prescrição médica | Texto | Opcional | Livre |

## 5. Precondições

- O profissional deve estar autenticado no sistema.
- O paciente deve estar cadastrado no sistema.

## 6. Pós-condições

- O profissional acessa as informações do histórico do paciente.
- Os dados apresentados devem estar atualizados e refletir consultas reais.

## 7. Pontos de extensão

- Integração com sistemas de prontuário eletrônico.
- Permitir exportação do histórico em formato PDF.

