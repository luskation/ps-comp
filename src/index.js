// src/index.js

// Carrega variáveis do .env
require('./config');

const fastify = require("fastify");
const EmailRoutes = require("./routes/email");
const cors = require("@fastify/cors");
const formBody = require("@fastify/formbody");

const server = fastify();

// Configuração de CORS — você pode liberar para tudo em produção se quiser
const corsOptions = {
  origin: true, // ou um domínio específico, ex: "https://seusite.com"
  credentials: true,
};

server.register(cors, corsOptions);
server.register(formBody);

// Registra as rotas
server.register(EmailRoutes);

// Inicia o servidor — ATENÇÃO para host: "0.0.0.0"
server.listen({
  port: process.env.PORT || 3200,
  host: "0.0.0.0"
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
