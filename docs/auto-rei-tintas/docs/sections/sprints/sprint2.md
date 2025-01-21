# Documentação da Modelagem do Banco de Dados

## Introdução

Este documento descreve a modelagem do banco de dados utilizado na API desenvolvida. o banco foi construído para atender às funcionalidades principais do sistema, sendo elas:
gerenciamento do usuário, pedidos, produtos, estoque, status e histórico do pedido.

## Versões Iniciais

Para acessar às primeiras versões do modelo entidade relacionamento (MER) do banco e sua ideia de modelo relacional (MR): [link](https://app.diagrams.net/#G1uuyOgxtCFUpujv6f5A_hLrWncBwQjZEC#%7B%22pageId%22%3A%227oW0I3TyjF0ssKiXA1OV%22%7D)

---

![modelo-banco](https://i.ibb.co/s186dHY/Capture2.png)

## Modelagem do Banco de Dados

### **1. Tabela `Usuarios`**

Esta tabela armazena informações sobre os usuários do sistema.

**Colunas:**

- `id`: Identificador único do usuário (chave primária).
- `nome`: Nome completo do usuário.
- `email`: Endereço de e-mail exclusivo do usuário.
- `senha_hash`: Hash da senha do usuário.
- `telefone`: Telefone de contato do usuário.
- `criado_em`: Timestamp de criação.
- `atualizado_em`: Timestamp da última atualização.

**Relacionamentos:**

- Um usuário pode estar associado a vários pedidos.

---

### **2. Tabela `Roles`**

Define os papéis (roles) que um usuário pode assumir no sistema.

**Colunas:**

- `id`: Identificador único do papel (chave primária).
- `nome`: Nome do papel.
- `descricao`: Descrição do papel.

**Relacionamentos:**

- Relacionada com `Usuarios` através da tabela `Usuario_Role`.

---

### **3. Tabela `Usuario_Role`**

Associa usuários a seus respectivos papéis.

**Colunas:**

- `usuario_id`: Identificador do usuário (chave estrangeira para `Usuarios`).
- `role_id`: Identificador do papel (chave estrangeira para `Roles`).

**Relacionamentos:**

- Relacionamento muitos-para-muitos entre `Usuarios` e `Roles`.

---

### **4. Tabela `Produtos`**

Armazena os produtos disponíveis no sistema.

**Colunas:**

- `id`: Identificador único do produto (chave primária).
- `nome`: Nome do produto.
- `descricao`: Descrição do produto.
- `preco`: Preço do produto.
- `criado_em`: Timestamp de criação.
- `atualizado_em`: Timestamp da última atualização.

**Relacionamentos:**

- Um produto pode estar associado a várias categorias através da tabela `Produto_Categoria`.
- Um produto pode estar associado a itens de pedidos.

---

### **5. Tabela `Categorias`**

Organiza os produtos em categorias hierárquicas.

**Colunas:**

- `id`: Identificador único da categoria (chave primária).
- `nome`: Nome da categoria.
- `categoria_pai_id`: Referência para a categoria pai (chave estrangeira para `Categorias`).

**Relacionamentos:**

- Relacionamento hierárquico (categoria pai e filha).
- Relacionada com `Produtos` através da tabela `Produto_Categoria`.

---

### **6. Tabela `Produto_Categoria`**

Faz o relacionamento entre produtos e categorias.

**Colunas:**

- `produto_id`: Identificador do produto (chave estrangeira para `Produtos`).
- `categoria_id`: Identificador da categoria (chave estrangeira para `Categorias`).

---

### **7. Tabela `Pedidos`**

Armazena os pedidos realizados pelos usuários.

**Colunas:**

- `id`: Identificador único do pedido (chave primária).
- `usuario_id`: Identificador do cliente (chave estrangeira para `Usuarios`).
- `status_id`: Identificador do status atual do pedido (chave estrangeira para `Status_Pedido`).
- `criado_em`: Timestamp de criação do pedido.
- `atualizado_em`: Timestamp da última atualização do pedido.

**Relacionamentos:**

- Relacionado com `Usuarios`.
- Relacionado com `Itens_Pedido` e `Historico_Status_Pedido`.

---

### **8. Tabela `Itens_Pedido`**

Define os itens associados a um pedido.

**Colunas:**

- `id`: Identificador único do item do pedido (chave primária).
- `pedido_id`: Identificador do pedido (chave estrangeira para `Pedidos`).
- `produto_id`: Identificador do produto (chave estrangeira para `Produtos`).
- `quantidade`: Quantidade do produto.
- `preco_unitario`: Preço unitário do produto.
- `desconto`: Desconto aplicado no produto.

---

### **9. Tabela `Status_Pedido`**

Define os diferentes status que um pedido pode ter.

**Colunas:**

- `id`: Identificador único do status (chave primária).
- `descricao`: Descrição do status.

---

### **10. Tabela `Historico_Status_Pedido`**

Mantém o histórico de alterações de status dos pedidos.

**Colunas:**

- `id`: Identificador único do histórico (chave primária).
- `pedido_id`: Identificador do pedido (chave estrangeira para `Pedidos`).
- `status_id`: Identificador do status (chave estrangeira para `Status_Pedido`).
- `alterado_em`: Timestamp da alteração de status.

---

### **11. Tabela `Estoque`**

Armazena informações sobre o estoque dos produtos.

**Colunas:**

- `id`: Identificador único do estoque (chave primária).
- `produto_id`: Identificador do produto (chave estrangeira para `Produtos`).
- `quantidade_atual`: Quantidade atual do produto em estoque.
- `atualizado_em`: Timestamp da última atualização.

---

### **12. Tabela `Movimentacao_Estoque`**

Registra as movimentações do estoque, como entradas e saídas.

**Colunas:**

- `id`: Identificador único da movimentação (chave primária).
- `estoque_id`: Identificador do estoque (chave estrangeira para `Estoque`).
- `tipo_movimentacao`: Tipo de movimentação ("Entrada" ou "Saída").
- `quantidade`: Quantidade movimentada.
- `referencia_id`: ID de pedido ou ajuste manual.
- `motivo`: Descrição do motivo da movimentação.
- `criado_em`: Timestamp da movimentação.
