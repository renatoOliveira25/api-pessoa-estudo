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
const db_1 = require("../db/db");
// Criando um servidor com a API express
const app = (0, express_1.default)();
// Definindo a porta onde o servidor vai
// escutar as requisições
const port = 3000;
// configurando o servidor para usar JSON
app.use(express_1.default.json());
// Configurando o servidor para usar o CORS
app.use((0, cors_1.default)());
/**
 * Banco de dados
 */
/* async function getUsers() {
  try {
    const result = await db.query('SELECT * FROM pessoas');
    console.log(result);
    return result;
  } catch (error) {
    console.error('Erro ao consultar os usuários:', error);
  }
}
 */
// Rota principal do servidor
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Rota de cadastro de usuário
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // recupera os dados recebidos na requisição
        const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
        // instancia um novo objeto usando os dados da requisição
        //const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
        yield db_1.db.none(`INSERT INTO pessoas 
                  (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                  VALUES 
                  ($1, $2, $3, $4, $5, $6, $7)`, [nome, cpf, data_nascimento, telefone, endereco, altura, peso]);
        res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });
    }
    catch (error) {
        console.error('Erro ao cadastrar informações:', error);
        res.status(500).json({ erro: 'Erro ao cadastrar informações' });
    }
}));
// Recupera todas as pessoas cadastradas
app.get('/pessoas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.db.query('SELECT * FROM pessoas');
        console.log(result);
        res.json(result);
    }
    catch (error) {
        console.error('Erro na consulta ao banco de dados:', error);
        res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
    }
    /* const listaDePessoas = getUsers().finally(() => {
      // Encerre a conexão com o banco de dados após a consulta
      pgp.end();
    }); */
    // "banco de dados" local
    //const listaDePessoas = listaPessoas();
}));
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor Express ouvindo na porta ${port}`);
});
//# sourceMappingURL=app.js.map