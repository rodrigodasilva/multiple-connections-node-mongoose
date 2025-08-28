# Exemplo de múltiplas conexões com MongoDB usando Node.js e Mongoose

Este projeto demonstra como se conectar a múltiplos bancos MongoDB em uma aplicação Node.js com Mongoose, utilizando Docker Compose para subir todo o ambiente automaticamente.

## 🚀 O que você vai aprender

- Como usar mongoose.createConnection para gerenciar múltiplas conexões.
- Como organizar as conexões em uma classe Database, acessando modelos por alias (primary, secondary).
- Como rodar dois bancos MongoDB (mongo_primary e mongo_secondary) via Docker Compose.
- Como criar e consultar dados em cada banco de forma isolada.

## 🛠️ Tecnologias utilizadas

- Node.js
- Mongoose
- MongoDB
- Docker
- Docker Compose

## 📂 Estrutura do projeto

- ├── docker-compose.yml
- ├── Dockerfile
- ├── package.json
- └── src/
    - ├── database.js
    - ├── index.js
    - └── models/
        - ├── User.js
        - └── Report.js

## ▶️ Como rodar o projeto

Clone este repositório

```bash
git clone git@github.com:rodrigodasilva/multiple-connections-node-mongoose.git 

cd multiple-connections-node-mongoose
```



Suba os containers (MongoDB + Node.js)

```bash
docker-compose up --build
```

O container node_app irá:

- Conectar ao banco primary e criar um usuário (User).

- Conectar ao banco secondary e criar um relatório (Report).

- Exibir os registros no console.

Exemplo de saída esperada:

```bash
Connected to primary
Connected to secondary
Users: [ { _id: ..., name: 'Rodrigo Ribeiro', email: 'rodrigo@example.com' } ]
Reports: [ { _id: ..., title: 'Primeiro relatório', content: 'Conteúdo do relatório...' } ]
```