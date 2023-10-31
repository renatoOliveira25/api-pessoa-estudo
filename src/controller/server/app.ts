import express from 'express';
import cors from 'cors';
import { apagarPessoa, atualizarPessoa, buscaPessoa, listarPessoas, persistirPessoa } from '../db/banco';

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
app.post('/user', async (req, res) => {

  // recupera os dados recebidos na requisição
  const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

  // instancia um novo objeto usando os dados da requisição
    //const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

  try {
     
    // Persistindo os dados no banco
    await persistirPessoa(nome, cpf, data_nascimento, telefone, endereco, altura, peso);

    // Reposta ao back-end caso a query tenha sido realizada com sucesso
    res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });

  } catch (error) {

    // Em caso de erro, é exibida a mensagem no console do back-end
    console.error('Erro ao cadastrar informações:', error);

    // E restransmitida ao cliente
    res.status(500).json({ erro: 'Erro ao cadastrar informações' });

  }
});

// Recupera todas as pessoas cadastradas
app.get('/pessoas', async (req, res) => {

  try {

    // Recupera a lista de pessoas do banco de dados e armazena na variável result
    const result = await listarPessoas();

    //console.log(result);

    // Retorna o resultado para o cliente
    res.json(result);

  } catch (error) {
    // Em caso de erro, é exibido no console
    console.error('Erro na consulta ao banco de dados:', error);

    // E retornado ao cliente
    res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }
});

// Recupera todas as pessoas cadastradas
app.get('/pessoa/:nome', async (req, res) => {

  const { nome } = req.params;

  console.log(nome);

  try {

    // Recupera a lista de pessoas do banco de dados e armazena na variável result
    const result = await buscaPessoa(nome);

    console.log(result);

    // Retorna o resultado para o cliente
    res.json(result);

  } catch (error) {
    // Em caso de erro, é exibido no console
    console.error('Erro na consulta ao banco de dados:', error);

    // E retornado ao cliente
    res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
  }
});

app.put('/atualizar/:id', async (req, res) => {
  console.log('Alterando os dados no servidor');

  const requisicao = req.body;

  console.log(requisicao.dadosPessoa.id);

  try {
    // Atualizando os dados no banco
    /* await atualizarPessoa(
        requisicao.dadosPessoa.id, 
        requisicao.dadosPessoa.nome, 
        requisicao.dadosPessoa.cpf, 
        requisicao.dadosPessoa.data_nascimento, 
        requisicao.dadosPessoa.telefone, 
        requisicao.dadosPessoa.endereco, 
        requisicao.dadosPessoa.altura, 
        requisicao.dadosPessoa.peso); */

    // Reposta ao back-end caso a query tenha sido realizada com sucesso
    res.status(201).json({ mensagem: "Informações atualizadas com sucesso" });
  } catch (error) {
    // Em caso de erro, é exibida a mensagem no console do back-end
    console.error('Erro ao alterar informações:', error);

    // E restransmitida ao cliente
    res.status(500).json({ erro: 'Erro ao alterar informações' });
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;

    console.log('Realizando a query de delete');
    
    // Execute a operação de exclusão no banco de dados
    await apagarPessoa(parseInt(id));

    // Caso tenha dado certo, é retornado ao cliente
    res.status(204).end();
  } catch (error) {
    console.error('Erro ao remover o cadastro:', error);
    res.status(500).json({ erro: 'Erro ao remover o cadastro' });
  }
});

// Executando o servidor
app.listen(port, () => {
  console.log(`Servidor Express ouvindo na porta ${port}`);
});
