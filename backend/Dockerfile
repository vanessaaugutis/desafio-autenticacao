FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV JWT_SECRET=004faf95675a1802516044fbafa4990bd9d87b8c7f6bcb56655a295b9e576e273f6c06ca8a2daf84

EXPOSE 5000

CMD ["node", "app.js"]
