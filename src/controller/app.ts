import { server } from './server/server';

// Definindo a porta onde o servidor vai
// escutar as requisições
const port: number = 3000;

// Executando o servidor
server.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});