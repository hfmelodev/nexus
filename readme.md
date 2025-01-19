# Nexus

**Uma API de fórum desenvolvida com Design Orientado ao Domínio (DDD).**

Nexus é uma aplicação que permite a criação e gestão de fóruns de discussão, seguindo os princípios de DDD para uma arquitetura organizada e sustentável.

---

## 🚀 Funcionalidades

- **Criação de Tópicos:** Permite que os usuários iniciem novos tópicos de discussão.
- **Comentários:** Facilita a interação dos usuários através de comentários nos tópicos.
- **Notificações:** Informa os usuários sobre novas interações em tópicos de interesse.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Plataforma de desenvolvimento back-end.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Prisma** - ORM para interagir com o banco de dados de forma eficiente.
- **Vitest** - Framework de testes unitários.

---

## 📦 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [pnpm](https://pnpm.io/)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nexus.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd nexus
   ```

3. **Instale as dependências:**
   ```bash
   pnpm install
   ```

4. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

5. **Execute as migrações do banco de dados:**
   ```bash
   pnpm prisma migrate dev
   ```

6. **Inicie o servidor:**
   ```bash
   pnpm dev
   ```

O servidor estará disponível em `http://localhost:3000`.

---

## 🧪 Testes

Para rodar os testes, utilize:
```bash
pnpm test
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

### ⭐ Agradecimentos

Se você achou este projeto útil, deixe uma estrela no repositório! Isso ajuda bastante na divulgação e crescimento do projeto. 🚀
