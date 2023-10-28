"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Pessoa_1 = require("../../model/Pessoa");
const bancoDeDados_1 = require("../bancoDeDados");
// Criando um servidor com a API express
const app = (0, express_1.default)();
// Definindo a porta onde o servidor vai
// escutar as requisições
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Rota principal do servidor
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.post('/user', (req, res) => {
    console.log('Solicitação recebida:', req.body);
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    const novaPessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    console.log((0, bancoDeDados_1.persistir)(novaPessoa));
    res.json({ mensagem: 'Dados recebidos com sucesso!' });
});
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor Express ouvindo na porta ${port}`);
});
//# sourceMappingURL=app.js.map