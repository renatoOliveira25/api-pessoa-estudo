import express from 'express';
import cors from 'cors';
import { Pessoa } from '../../model/Pessoa';
import { persistir } from '../bancoDeDados';

// Criando um servidor com a API express
const app = express();
// Definindo a porta onde o servidor vai
// escutar as requisições
const port: number = 3000;

// configurando o servidor para usar JSON
app.use(express.json());

// Configurando o servidor para usar o CORS
app.use(cors());

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
  const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

  // persiste o objeto instanciado no banco de dados
  console.log(persistir(novaPessoa));

  // retorna uma reposta ao front-end
  res.json({ mensagem: 'Dados recebidos com sucesso!' });
});

// Executando o servidor
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

