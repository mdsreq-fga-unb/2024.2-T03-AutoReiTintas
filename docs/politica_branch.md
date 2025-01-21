# Política de Branches

Este documento descreve as diretrizes para o uso de branches em um projeto, com foco em garantir que o fluxo de trabalho seja organizado, eficiente e fácil de entender. As convenções de nomenclatura e as práticas recomendadas ajudarão a equipe a manter o controle sobre as versões e facilitarão a colaboração.

---

## 1. Estrutura de Branches

### 1.1 **`main`**
- A **`main`** é a branch principal e sempre contém a versão **estável** e **pronta para produção**.
- Somente **código aprovado e revisado** deve ser mesclado nesta branch.
- **Nunca faça desenvolvimento direto na `main`**.

### 1.2 **`develop`**
- A **`develop`** é a branch de **desenvolvimento contínuo**.
- Todas as funcionalidades em andamento devem ser mescladas nela.
- **`develop`** contém o código que será preparado para a próxima versão de produção.

### 1.3 **Branches de Funcionalidade (`feature/`)**
- **Objetivo**: Desenvolvimento de novas funcionalidades.
- Cada nova funcionalidade deve ser desenvolvida em uma branch separada criada a partir da **`develop`**.
- **Nomenclatura**: `feature/{descrição-curta}`, por exemplo: `feature/adicionar-login`.
- Após a conclusão, a branch de funcionalidade será mesclada de volta na **`develop`**.
---

## 2. Fluxo de Trabalho

### 2.1 **Criação de Branch**
- Crie uma nova branch a partir da **`develop`** para funcionalidade ou de **`main`** para correções críticas.
- Utilize a convenção de nomenclatura descrita para facilitar o rastreamento.
- Realize commits frequentes e sempre com mensagens claras que descrevam as mudanças feitas.

### 2.2 **Desenvolvimento e Atualizações**
- Mantenha a branch de funcionalidade ou correção atualizada com as mudanças da **`develop`**.
- Evite trabalhar diretamente na **`main`**, a menos que esteja corrigindo um bug crítico.

### 2.3 **Pull Requests (PRs)**
- Após concluir uma funcionalidade ou correção, abra um **pull request** para mesclar as alterações na **`develop`**
- O PR deve ser revisado por pelo menos um membro da equipe antes de ser aprovado.
- Após a aprovação, a branch será mesclada na **`develop`** e somente depois a **`main`**.

### 2.4 **Testes**
- Todos os testes relevantes devem ser realizados antes de criar um PR.
- Testes automatizados devem ser executados para garantir que o código não quebrou funcionalidades existentes.
- Durante o desenvolvimento, utilize **`test/`** branches para testes rápidos e experimentos.

### 2.5 **Mesclagem e Deploy**
- Após a mesclagem, a **`main`** estará pronta para o deploy em produção.
- **Não faça deploy diretamente da `develop`**, somente a partir da **`main`**.

---

## 3. Best Practices

### 3.1 **Commits pequenos e frequentes**
- Realize commits pequenos e frequentes. Isso facilita a revisão do código e mantém o histórico limpo.
- Evite commits grandes, pois eles dificultam a revisão e podem introduzir múltiplos erros de uma vez.

### 3.2 **Nomenclatura consistente**
- Mantenha a nomenclatura das branches clara e consistente.
- Siga as convenções de nomenclatura descritas neste documento para evitar confusão e facilitar a navegação pelo código.

### 3.3 **Rebase em vez de Merge**
- Sempre que possível, utilize `git rebase` ao invés de `git merge` para manter um histórico de commits linear e limpo.
- Use o `merge` apenas quando necessário, como no caso de pull requests para a `main` ou `develop`.

### 3.4 **Revisão de código**
- Todos os PRs devem ser revisados por pelo menos um membro da equipe para garantir que o código esteja conforme os padrões e boas práticas.

### 3.5 **Não desenvolva diretamente na `main`**
- **Nunca** faça desenvolvimento direto na branch `main`. Crie sempre uma branch separada para seu trabalho.
- Isso evita conflitos e permite que o código passe por revisão antes de ser mesclado à produção.

---

## 4. Exemplos de Fluxo

### 4.1 **Desenvolvimento de uma nova funcionalidade**
1. Crie uma branch de funcionalidade a partir de **`develop`**: `feature/adicionar-painel-de-controle`.
2. Realize os commits conforme o desenvolvimento avança.
3. Abra um PR para **`develop`** quando a funcionalidade estiver completa.
4. Após revisão e aprovação, a branch será mesclada na **`develop`**.

### 4.2 **Correção de um bug crítico**
1. Crie uma branch de correção a partir de **`main`**: `hotfix/corrigir-painel-inativo`.
2. Realize o commit com a correção.
3. Abra um PR para **`main`**.
4. Após aprovação, a branch será mesclada na **`main`** e **`develop`**.

---