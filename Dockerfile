# Usa uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala apenas dependências de produção
RUN npm install --production

# Copia o restante do código
COPY . .

# Expõe a porta que o Render usará
EXPOSE 3200

# Comando para iniciar o app
CMD ["npm", "start"]
