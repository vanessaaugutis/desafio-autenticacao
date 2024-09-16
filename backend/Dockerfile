FROM node:16

WORKDIR /usr/src/desafio-autenticacao

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
