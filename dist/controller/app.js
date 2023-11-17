"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
// Definindo a porta onde o servidor vai
// escutar as requisições
const port = 3000;
// Executando o servidor
server_1.server.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map