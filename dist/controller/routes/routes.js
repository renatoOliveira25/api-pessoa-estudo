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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const banco_1 = require("../db/banco");
const Pessoa_1 = require("../../model/Pessoa");
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    return res.json('Hello World');
});
router.get('/pessoas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Recuperando informações de pessoas`);
        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = yield (0, banco_1.listarPessoas)();
        // Retorna o resultado para o cliente
        res.json(result.rows);
    }
    catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);
        // E retornado ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
}));
router.post('/cadastro', (req, res) => {
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    // instancia um novo objeto usando os dados da requisição
    const novaPessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    try {
        console.log(`Persistindo dados do objeto`);
        // Persistindo os dados no banco
        (0, banco_1.persistirObjetoPessoa)(novaPessoa);
        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });
    }
    catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao cadastrar informações:', error);
        // E restransmitida ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});
router.get('/pessoa/:nome', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome } = req.params;
    try {
        console.log(`Consultando registro com nome ${nome}`);
        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = yield (0, banco_1.buscaPessoa)(nome);
        // Retorna o resultado para o cliente
        res.json(result);
    }
    catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);
        // E retornado ao cliente
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
}));
router.put('/atualizar/:id', (req, res) => {
    try {
        console.log(`Atualizando objeto com id ${req.params.id}`);
        (0, banco_1.atualizarObjetoPessoa)(parseInt(req.params.id), new Pessoa_1.Pessoa(req.body.nome, req.body.cpf, new Date(req.body.data_nascimento), req.body.telefone, req.body.endereco, req.body.altura, req.body.peso));
        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações atualizadas com sucesso" });
    }
    catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao alterar informações:', error);
        // E restransmitida ao cliente
        res.status(500).json({ mnsagem: 'Algo deu errado' });
    }
});
router.delete('/deletar/:id', (req, res) => {
    try {
        console.log(`Removendo o objeto com id ${req.params.id}`);
        // Execute a operação de exclusão no banco de dados
        (0, banco_1.apagarPessoa)(parseInt(req.params.id));
        // Caso tenha dado certo, é retornado ao cliente
        res.status(204).end();
    }
    catch (error) {
        console.error('Erro ao remover o cadastro:', error);
        res.status(500).json({ mensagem: 'Algo deu errado' });
    }
});
//# sourceMappingURL=routes.js.map