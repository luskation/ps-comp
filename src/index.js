// src/index.js

// Carrega variáveis do .env
require('./config');

const fastify = require("fastify");
const EmailRoutes = require("./routes/email");
const cors = require("@fastify/cors");
const formBody = require("@fastify/formbody");

const server = fastify();

const corsOptions = {
  credentials: true,
  origin: /localhost\:5173/,
};

server.register(cors, corsOptions);
server.register(formBody);

// Registra as rotas
server.register(EmailRoutes);

// Inicia o servidor
server.listen({
  port: process.env.PORT || 3200
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
