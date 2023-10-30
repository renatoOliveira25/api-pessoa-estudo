import express from 'express';
import cors from 'cors';
import { Pessoa } from '../../model/Pessoa';
import { listaPessoas, persistir } from '../bancoDeDados';
import { db } from '../db/db';

// Criando um servidor com a API express
const app = express();
// Definindo a porta onde o servidor vai
// escutar as requisições
const port: number = 3000;

// configurando o servidor para usar JSON
app.use(express.json());

// Configurando o servidor para usar o CORS
app.use(cors());

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
app.post('/user', async (req, res) => {

  try {
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    // instancia um novo objeto usando os dados da requisição
    //const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

    await db.none(`INSERT INTO pessoas 
                  (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                  VALUES 
                  ($1, $2, $3, $4, $5, $6, $7)`, [nome, cpf, data_nascimento, telefone, endereco, altura, peso]);

    res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });

  } catch (error) {
    console.error('Erro ao cadastrar informações:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar informações' });
  }
});

// Recupera todas as pessoas cadastradas
app.get('/pessoas', async (req, res) => {

  try {
    const result = await db.query('SELECT * FROM pessoas');
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }

  /* const listaDePessoas = getUsers().finally(() => {
    // Encerre a conexão com o banco de dados após a consulta
    pgp.end();
  }); */

  // "banco de dados" local
  //const listaDePessoas = listaPessoas();
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;

    console.log('Realizando a query de delete');
    // Execute a operação de exclusão no banco de dados
    await db.none('DELETE FROM pessoas WHERE id = $1', id);

    res.status(204).end(); // Resposta sem conteúdo
  } catch (error) {
    console.error('Erro ao remover o cadastro:', error);
    res.status(500).json({ erro: 'Erro ao remover o cadastro' });
  }
});

// Executando o servidor
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});

