import express from 'express';
import cors from 'cors';
import { Pessoa } from '../../model/Pessoa';
import { persistir } from '../bancoDeDados';

// Criando um servidor com a API express
const app = express();
// Definindo a porta onde o servidor vai
// escutar as requisições
const port: number = 3000;

app.use(cors());

// Rota principal do servidor
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/user', (req, res) => {
  const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

  const novaPessoa = new Pessoa(nome, cpf, data_nascimento, telefone, endereco, altura, peso);

  console.log(persistir(novaPessoa));

  res.json({ mensagem: 'Dados recebidos com sucesso!' });
});

// Executando o servidor
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

