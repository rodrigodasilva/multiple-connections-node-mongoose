FROM node:20

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Comando padrão
CMD ["npm", "start"]
