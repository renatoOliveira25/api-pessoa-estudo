"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const banco_1 = require("../db/banco");
const Pessoa_1 = require("../../model/Pessoa");
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
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    // instancia um novo objeto usando os dados da requisição
    const novaPessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    try {
        // Persistindo os dados no banco
        yield (0, banco_1.persistirPessoa)(novaPessoa);
        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });
    }
    catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao cadastrar informações:', error);
        // E restransmitida ao cliente
        res.status(500).json({ erro: 'Erro ao cadastrar informações' });
    }
}));
// Recupera todas as pessoas cadastradas
app.get('/pessoas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = yield (0, banco_1.listarPessoas)();
        // fazer o map do JSON
        // console.log(result.rows);
        // Retorna o resultado para o cliente
        res.json(result);
    }
    catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);
        // E retornado ao cliente
        res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
    }
}));
// Recupera todas as pessoas cadastradas
app.get('/pessoa/:nome', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome } = req.params;
    console.log(nome);
    try {
        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = yield (0, banco_1.buscaPessoa)(nome);
        console.log(result);
        // Retorna o resultado para o cliente
        res.json(result);
    }
    catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);
        // E retornado ao cliente
        res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
    }
}));
app.put('/atualizar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Alterando os dados no servidor');
    const requisicao = req.body;
    try {
        // Atualizando os dados no banco
        yield (0, banco_1.atualizarPessoa)(requisicao.dadosPessoa.id, requisicao.dadosPessoa.nome, requisicao.dadosPessoa.cpf, requisicao.dadosPessoa.data_nascimento, requisicao.dadosPessoa.telefone, requisicao.dadosPessoa.endereco, requisicao.dadosPessoa.altura, requisicao.dadosPessoa.peso);
        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações atualizadas com sucesso" });
    }
    catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao alterar informações:', error);
        // E restransmitida ao cliente
        res.status(500).json({ erro: 'Erro ao alterar informações' });
    }
}));
app.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log('Realizando a query de delete');
        // Execute a operação de exclusão no banco de dados
        yield (0, banco_1.apagarPessoa)(parseInt(id));
        // Caso tenha dado certo, é retornado ao cliente
        res.status(204).end();
    }
    catch (error) {
        console.error('Erro ao remover o cadastro:', error);
        res.status(500).json({ erro: 'Erro ao remover o cadastro' });
    }
}));
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor Express ouvindo na porta ${port}`);
});
//# sourceMappingURL=app.js.map