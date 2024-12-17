# 9 Backlog

## 9.1 Backlog Geral

### Épicos

| ID | Épico | Descrição |
| ---| ---| --- |
| EP01 | Processo de Compra e Interação com o Vendedor | O sistema deve permitir que o usuário adicione produtos ao carinho de compras e seja encaminhado para o vendedor |
| EP02 | Estoque e gerenciamento de produtos | O sistema deve permitir que os gestores condigam gerar estoque e gerenciar produtos |
| EP03 | Cadastro e autenticação | O sistema deve permitir que usuários realizem cadastro na aplicação e que possam se autenticar |
| EP04 | Análise de dados e geração de relatórios | O sistema deve permitir que dados sejam analisados e que relatórios sobre esses dados sejam gerados |
| EP05 | Avaliação de produtos | O sistema deve permitir que os usuários avaliem em nota algum produto e permita com que eles deixem um comentário |
| EP06 | Ter acesso ao histórico de atividades | O sistema deve permitir que os usuários autenticados possam ter acesso ao seu histórico de compras |

### Histórias de Usuário

A seguir, em tabela, mostra-se cada história de usuário que derivaram dos requisitos funcionais apresentados no tópico 7.1. Esta é uma lista preliminar e deverá sofrer ajustes sempre que necessário, durante o desenvolvimento do produto da auto reis tintas.

  

| Código(EP) | **Código(US)** | **Descrição** |
| ---| ---| --- |
| EP07 | **US01** | O sistema deve permitir o cadastro de novos clientes, para que eles possam acessar informações e realizar compras. |
| EP03 | **US02** | O sistema deve permitir a atualização das informações dos perfis dos clientes, para que seus dados estejam sempre corretos e atualizados. |
| EP03 | **US03** | O sistema deve permitir a exclusão de contas de clientes, para que eles possam encerrar seu vínculo com o sistema, se desejarem. |
| EP03 | **US04** | O sistema deve permitir que clientes façam login, para que eles possam acessar funcionalidades exclusivas, como consulta de pedidos e histórico de compra. |
| EP02 | **US05** | O sistema deve permitir que gestores façam login, para que eles possam acessar funcionalidades administrativas, como a edição de produtos no catálogo. |
| EP02 | **US06** | O sistema deve permitir que gestores criem, alterem e excluam produtos, para que o catálogo esteja sempre atualizado. |
| EP02 | **US07** | O sistema deve permitir que administradores criem, alterem e excluam contas de gestores, para que eles possam delegar responsabilidades no controle de estoque. |
| EP01 | **US08** | O sistema deve permitir que clientes adicionem, removam ou modifiquem produtos no carrinho, para que eles possam preparar suas compras conforme suas necessidades. |
| EP01 | **US09** | O sistema deve permitir o redirecionamento para o WhatsApp ao finalizar a compra, para que o cliente possa realizar o pagamento ou tirar dúvidas diretamente com o atendimento. |
| EP01 | **US10** | O sistema deve permitir que usuários naveguem pelo site e montem carrinhos de compras sem realizar login, para que eles possam explorar os produtos antes de criar uma conta. |
| EP05 | **US11** | O sistema deve permitir que clientes avaliem os produtos e a experiência de compra, para que essas informações ajudem outros usuários e aprimorem o serviço. |
|  | **US12** | O sistema deve permitir que clientes logados consultem o histórico de pedidos, para que eles possam acompanhar e revisar suas compras. |
| EP04 | **US13** | O sistema deve permitir a geração de relatórios de vendas e tendências de compra, para que gestores possam tomar decisões estratégicas para o negócio. |
| EP01 | **US14** | O sistema deve permitir o monitoramento de produtos adicionados ao carrinho mas não comprados, para que gestores possam identificar padrões de abandono e melhorar a conversão. |
| EP03 | **US15** | O sistema deve permitir a recuperação de senha por e-mail, para que clientes possam acessar suas contas mesmo após esquecerem a senha. |
| EP06 | **US16** | O sistema deve permitir que o usuário consiga pesquisar por produtos, para que haja praticidade na busca de itens de modo a melhorar sua experiência de usuário no site. |

##   

## 9.2 Priorização do Backlog

#### 1. **Impacto no Objetivo de Negócio**

Avalia como cada funcionalidade contribui diretamente para os objetivos principais do produto, como aumentar as vendas, melhorar a experiência do cliente ou otimizar a gestão.

(de 1 a 5)

#### 2. **Complexidade de Implementação**

Considera o esforço técnico e os recursos necessários para implementar cada funcionalidade. (de 1 a 5)

#### 3. **Urgência**

Define o quão rapidamente a funcionalidade deve ser entregue para atender às expectativas dos stakeholders ou ao lançamento do produto. (de 1 a 5)

  

| **Código** | **Descrição** | valor de negócio | Complexidade de Implementação | Urgência | Total |
| ---| ---| ---| ---| ---| --- |
| **US01** | O sistema deve permitir o cadastro de novos clientes, para que eles possam acessar informações e realizar compras. | 3 | 3 | 3 | 9 |
| **US02** | O sistema deve permitir a atualização das informações dos perfis dos clientes, para que seus dados estejam sempre corretos e atualizados. | 3 | 3 | 2 | 8 |
| **US03** | O sistema deve permitir a exclusão de contas de clientes, para que eles possam encerrar seu vínculo com o sistema, se desejarem. | 3 | 2 | 3 | 8 |
| **US04** | O sistema deve permitir que clientes façam login, para que eles possam acessar funcionalidades exclusivas, como consulta de pedidos e histórico de compra. | 3 | 3 | 2 | 8 |
| **US05** | O sistema deve permitir que gestores façam login, para que eles possam acessar funcionalidades administrativas, como a edição de produtos no catálogo. | 5 | 5 | 5 | 15 |
| **US06** | O sistema deve permitir que gestores criem, alterem e excluam produtos, para que o catálogo esteja sempre atualizado. | 5 | 5 | 5 | 15 |
| **US07** | O sistema deve permitir que administradores criem, alterem e excluam contas de gestores, para que eles possam delegar responsabilidades no controle de estoque. | 5 | 5 | 5 | 15 |
| **US08** | O sistema deve permitir que clientes adicionem, removam ou modifiquem produtos no carrinho, para que eles possam preparar suas compras conforme suas necessidades. | 5 | 4 | 5 | 14 |
| **US09** | O sistema deve permitir o redirecionamento para o WhatsApp ao finalizar a compra, para que o cliente possa realizar o pagamento ou tirar dúvidas diretamente com o atendimento. | 5 | 4 | 5 | 14 |
| **US10** | O sistema deve permitir que usuários naveguem pelo site e montem carrinhos de compras sem realizar login, para que eles possam explorar os produtos antes de criar uma conta. | 5 | 3 | 5 | 13 |
| **US11** | O sistema deve permitir que clientes avaliem os produtos e a experiência de compra, para que essas informações ajudem outros usuários e aprimorem o serviço. | 2 | 4 | 1 | 7 |
| **US12** | O sistema deve permitir que clientes logados consultem o histórico de pedidos, para que eles possam acompanhar e revisar suas compras. | 3 | 3 | 3 | 9 |
| **US13** | O sistema deve permitir a geração de relatórios de vendas e tendências de compra, para que gestores possam tomar decisões estratégicas para o negócio. | 4 | 5 | 1 | 10 |
| **US14** | O sistema deve permitir o monitoramento de produtos adicionados ao carrinho mas não comprados, para que gestores possam identificar padrões de abandono e melhorar a conversão. | 4 | 4 | 1 | 9 |
| **US15** | O sistema deve permitir a recuperação de senha por e-mail, para que usuários possam acessar suas contas mesmo após esquecerem a senha. | 5 | 4 | 4 | 13 |
| **US16** | O sistema deve permitir que o usuário consiga pesquisar por produtos, para que haja praticidade na busca de itens de modo a melhorar sua experiência de usuário no site. | 4 | 4 | 3 | 11 |

### Pontos da tabela

| total | média de pontos |
| ---| --- |
| 167 | 11.125 |

Com base no método **MoSCoW** (Must Have, Should Have, Could Have, Won't Have), as histórias de usuário podem ser priorizadas de acordo com sua relevância e impacto no MVP.

### Definições do MoSCoW

1. **Must Have (M)**: Funcionalidades essenciais que o produto deve ter para atender ao objetivo principal. (Funcionalidades **acima da média**)
2. **Should Have (S)**: Funcionalidades importantes, mas não críticas, que podem ser implementadas após o lançamento inicial. (Funcionalidades entre 8 e 11)
3. **Could Have (C)**: Funcionalidades desejáveis, mas opcionais e que podem ser adiadas. (Funcionalidades **abaixo de 8**)
4. **Won’t Have (W)**: Funcionalidades que não serão incluídas na versão atual (fora do escopo do MVP). (Funcionalidades com **urgência** **abaixo de 2**)

  

| **Código** | **Descrição** | **Categoria MoSCoW** |
| ---| ---| --- |
| **US01** | O sistema deve permitir o cadastro de novos clientes, para que eles possam acessar informações e realizar compras. | **Should Have (S)** |
| **US02** | O sistema deve permitir a atualização das informações dos perfis dos clientes, para que seus dados estejam sempre corretos e atualizados. | **Should Have (S)** |
| **US03** | O sistema deve permitir a exclusão de contas de clientes, para que eles possam encerrar seu vínculo com o sistema, se desejarem. | **Should Have (S)** |
| **US04** | O sistema deve permitir que clientes façam login, para que eles possam acessar funcionalidades ex''clusivas, como consulta de pedidos e histórico de compra. | **Should Have (S)** |
| **US05** | O sistema deve permitir que gestores façam login, para que eles possam acessar funcionalidades administrativas, como a edição de produtos no catálogo. | **Must Have (M)** |
| **US06** | O sistema deve permitir que gestores criem, alterem e excluam produtos, para que o catálogo esteja sempre atualizado. | **Must Have (M)** |
| **US07** | O sistema deve permitir que administradores criem, alterem e excluam contas de gestores, para que eles possam delegar responsabilidades no controle de estoque. | **Must Have (M)** |
| **US08** | O sistema deve permitir que clientes adicionem, removam ou modifiquem produtos no carrinho, para que eles possam preparar suas compras conforme suas necessidades. | **Must Have (M)** |
| **US09** | O sistema deve permitir o redirecionamento para o WhatsApp ao finalizar a compra, para que o cliente possa realizar o pagamento ou tirar dúvidas diretamente com o atendimento. | **Must Have (M)** |
| **US10** | O sistema deve permitir que usuários naveguem pelo site e montem carrinhos de compras sem realizar login, para que eles possam explorar os produtos antes de criar uma conta. | **Must Have (M)** |
| **US11** | O sistema deve permitir que clientes avaliem os produtos e a experiência de compra, para que essas informações ajudem outros usuários e aprimorem o serviço. | **Won’t Have (W)** |
| **US12** | O sistema deve permitir que clientes logados consultem o histórico de pedidos, para que eles possam acompanhar e revisar suas compras. | **Should Have (S)** |
| **US13** | O sistema deve permitir a geração de relatórios de vendas e tendências de compra, para que gestores possam tomar decisões estratégicas para o negócio. | **Won’t Have (W)** |
| **US14** | O sistema deve permitir o monitoramento de produtos adicionados ao carrinho mas não comprados, para que gestores possam identificar padrões de abandono e melhorar a conversão. | **Won’t Have (W)** |
| **US15** | O sistema deve permitir a recuperação de senha por e-mail, para que usuários possam acessar suas contas mesmo após esquecerem a senha. | **Should Have (S)** |
| **US16** | O sistema deve permitir que o usuário consiga pesquisar por produtos, para que haja praticidade na busca de itens de modo a melhorar sua experiência de usuário no site. | **Should Have (S)** |

### **Histórias Selecionadas para o MVP (Should + Must have)**

*   **US01**, **US02**, **US03**, **US04**, **US05**, **US06**, **US07**, **US08**, **US09**, **US10**, **US12**, **US15, US16**

### **Histórias que não entrarão para o MVP (Could + Won't have)**

*   **US11**, **US13**, **US14**.

### **Resumindo a Prioridade por MoSCoW**

| **MoSCoW** | **Quantidade de Histórias** | **Incluídas no MVP?** |
| ---| ---| --- |
| **Must Have** | 6 | Sim |
| **Should Have** | 7 | Sim |
| **Could Have** | 0 | Não |
| **Won’t Have** | 3 | Não |

## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| ---| ---| ---| ---| --- |
| `1.0` | 11/11/2024 | Criação do Documento | [Paulo Henrique](https://github.com/Nanashii76) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.1` | 09/12/2024 | levantamento do backlog do produto | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn) e [Diogo](https://github.com/Diogo-Barboza) |
| `1.2` | 12/12/2024 | tabela MoSCoW<br> | [Paulo Henrique](https://github.com/Nanashii76) | [Johan](https://github.com/johan-rocha) |
| `1.3` | 16/12/2024 | Adição dos épicos | [Paulo Henrique](https://github.com/Nanashii76), [Johan](https://github.com/johan-rocha), [Mariana Letícia](https://github.com/Marianannn) | [Johan](https://github.com/johan-rocha), [Paulo Henrique](https://github.com/Nanashii76), [Mariana Letícia](https://github.com/Marianannn), [Mateus Cavalcante](https://github.com/mateuscavati) e [Diogo](https://github.com/Diogo-Barboza) |