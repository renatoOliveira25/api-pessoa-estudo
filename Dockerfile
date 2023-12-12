# Use a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para instalar as dependências
COPY package*.json ./
COPY tsconfig.json ./

# Instale as dependências, incluindo o TypeScript, localmente
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Transpile os arquivos TypeScript para JavaScript usando o TypeScript
RUN npx tsc

# Exponha a porta que sua aplicação Node.js está usando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/controller/server/app.js"]
