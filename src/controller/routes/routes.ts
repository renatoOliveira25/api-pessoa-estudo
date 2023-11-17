import express from "express";
import { apagarPessoa, atualizarObjetoPessoa, atualizarPessoa, buscaPessoa, listarPessoas, persistirObjetoPessoa } from "../db/banco";
import { Pessoa } from "../../model/Pessoa";

const router = express.Router();

router.get('/', (req, res) => {
    return res.json('Hello World');
});

router.get('/pessoas', async (req, res) => {
    try {

        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = await listarPessoas();

        // fazer o map do JSON
        // console.log(result.rows);

        // Retorna o resultado para o cliente
        res.json(result);

    } catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);

        // E retornado ao cliente
        res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
    }
})

router.post('/cadastro', (req, res) => {
    // recupera os dados recebidos na requisição
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    // instancia um novo objeto usando os dados da requisição
    const novaPessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

    try {

        // Persistindo os dados no banco
        persistirObjetoPessoa(novaPessoa);

        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações cadastradas com sucesso" });

    } catch (error) {

        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao cadastrar informações:', error);

        // E restransmitida ao cliente
        res.status(500).json({ erro: 'Erro ao cadastrar informações' });

    }
});

router.get('/pessoa/:nome', async (req, res) => {
    const { nome } = req.params;

    try {

        // Recupera a lista de pessoas do banco de dados e armazena na variável result
        const result = await buscaPessoa(nome);

        // Retorna o resultado para o cliente
        res.json(result);

    } catch (error) {
        // Em caso de erro, é exibido no console
        console.error('Erro na consulta ao banco de dados:', error);

        // E retornado ao cliente
        res.status(500).json({ error: 'Erro na consulta ao banco de dados' });
    }
});

router.put('/atualizar/:id', (req, res) => {
    console.log('Alterando os dados no servidor');

    const requisicao = req.body;
    const id = req.params.id;

    try {
        atualizarObjetoPessoa(
            parseInt(id),
            new Pessoa(requisicao.nome,
                requisicao.cpf,
                new Date(requisicao.data_nascimento),
                requisicao.telefone,
                requisicao.endereco,
                requisicao.altura,
                requisicao.peso)
        );

        // Reposta ao back-end caso a query tenha sido realizada com sucesso
        res.status(201).json({ mensagem: "Informações atualizadas com sucesso" });
    } catch (error) {
        // Em caso de erro, é exibida a mensagem no console do back-end
        console.error('Erro ao alterar informações:', error);

        // E restransmitida ao cliente
        res.status(500).json({ erro: 'Erro ao alterar informações' });
    }
});

router.delete('/deletar/:id', (req, res) => {
    try {
        const id = req.params.id;

        console.log('Realizando a query de delete');

        // Execute a operação de exclusão no banco de dados
        apagarPessoa(parseInt(id));

        // Caso tenha dado certo, é retornado ao cliente
        res.status(204).end();
    } catch (error) {
        console.error('Erro ao remover o cadastro:', error);
        res.status(500).json({ erro: 'Erro ao remover o cadastro' });
    }
});

export { router };