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
// configurando o servidor para usar JSON
app.use(express_1.default.json());
// Configurando o servidor para usar o CORS
app.use((0, cors_1.default)());
// Rota principal do servidor
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Rota de cadastro de usuário
app.post('/user', (req, res) => {
    // exibe os dados recebidos na requisição
    console.log('Solicitação recebida:', req.body);
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    // instancia um novo objeto usando os dados da requisição
    const novaPessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    // persiste o objeto instanciado no banco de dados
    console.log((0, bancoDeDados_1.persistir)(novaPessoa));
    // retorna uma reposta ao front-end
    res.json({ mensagem: 'Dados recebidos com sucesso!' });
});
// Recupera todas as pessoas cadastradas
app.get('/pessoas', (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listaPessoas)();
    res.json(listaDePessoas);
});
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor Express ouvindo na porta ${port}`);
});
//# sourceMappingURL=app.js.map