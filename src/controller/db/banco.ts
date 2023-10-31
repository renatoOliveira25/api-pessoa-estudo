import { DatabaseModel } from "./conn";

const banco = new DatabaseModel().pool;

export async function persistirPessoa(nome: string, cpf: string, data_nascimento: Date, telefone: string, endereco: string, altura: number, peso: number) {
    return banco.query(`INSERT INTO pessoas 
                    (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                    VALUES 
                    ($1, $2, $3, $4, $5, $6, $7)`, [nome, cpf, data_nascimento, telefone, endereco, altura, peso]
                    );
}

export async function atualizarPessoa(id: number, nome: string, cpf: string, data_nascimento: Date, telefone: string, endereco: string, altura: number, peso: number) {
    return banco.query(`UPDATE pessoas
                        SET nome = '${nome}', cpf = '${cpf}', data_nascimento = '${data_nascimento}', telefone = '${telefone}', endereco = '${endereco}', altura = ${altura}, peso = ${peso}
                        WHERE id = ${id}`);
}

export async function listarPessoas() {
    return banco.query('SELECT * FROM pessoas');
}

export async function buscaPessoa(nome: string) {
    return banco.query(`SELECT * FROM pessoas WHERE nome LIKE '%${nome}%';`);
}

export async function apagarPessoa(id: number) {
    await banco.query(`DELETE FROM pessoas WHERE id = ${id}`);
}