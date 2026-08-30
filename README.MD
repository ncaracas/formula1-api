# Formula 1 API

API desenvolvida em Node.js com TypeScript usando Fastify para expor dados de equipes e pilotos da Fórmula 1.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify
- @fastify/cors
- tsx
- tsup
- @types/node

Essas ferramentas permitem criar uma API leve, rápida e com suporte ao desenvolvimento em TypeScript.

## 📌 Funcionalidades

A API oferece os seguintes endpoints:

- `GET /teams`
  - Retorna a lista de equipes da Fórmula 1.
- `GET /drivers`
  - Retorna a lista de pilotos.
- `GET /drivers/:id`
  - Retorna os dados de um piloto específico pelo ID.
- CORS habilitado
  - Permite que a API seja acessada por aplicações frontend em outros domínios.

O servidor fica disponível em:

- `http://localhost:3333`

## ✅ Requisitos

Antes de instalar, certifique-se de ter instalado em sua máquina:

- Git
- Node.js v22+
- npm v11+

## 🔧 Passo a passo da instalação

1. Clone o repositório:

```bash
git clone <git@github.com:ncaracas/formula1-api.git>
```

2. Acesse a pasta do projeto:

```bash
cd formula1-api
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a API em modo de desenvolvimento:

```bash
npm run start:dev
```

5. A API estará disponível em:

```bash
http://localhost:3333
```

## 🧪 Scripts disponíveis

No arquivo `package.json`, os scripts incluem:

- `npm run dist`
  - Compila o projeto para a pasta `dist`.
- `npm run start:dev`
  - Executa a aplicação em modo de desenvolvimento.
- `npm run start:watch`
  - Executa a aplicação com recarga automática quando arquivos mudam.
- `npm run start:dist`
  - Compila o projeto e executa a versão pronta em `dist`.

## 📝 Exemplo de uso

### Listar equipes

```bash
curl http://localhost:3333/teams
```

### Listar pilotos

```bash
curl http://localhost:3333/drivers
```

### Buscar um piloto por ID

```bash
curl http://localhost:3333/drivers/1
```

## 📦 Estrutura principal

- `src/server.ts`
  - Arquivo principal da API
  - Define os endpoints e os dados em memória
- `package.json`
  - Configuração do projeto e scripts
- `tsconfig.json`
  - Configuração do TypeScript

## 🎯 Objetivo do projeto

Este projeto foi criado para atender ao desafio final do Bootcamp Sem Parar Corpay - Back-end do Zero a Prática, servindo como uma API simples de consulta sobre Fórmula 1, com dados em memória, ideal para estudo, testes e integração com aplicações frontend.
