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
Object.defineProperty(exports, "__esModule", { value: true });
exports.apagarPessoa = exports.buscaPessoa = exports.listarPessoas = exports.atualizarObjetoPessoa = exports.atualizarPessoa = exports.persistirObjetoPessoa = exports.persistirPessoa = void 0;
const conn_1 = require("./conn");
const banco = new conn_1.DatabaseModel().pool;
function persistirPessoa(nome, cpf, data_nascimento, telefone, endereco, altura, peso) {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query(`INSERT INTO pessoas 
                    (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                    VALUES 
                    ('${nome}', '${cpf}', '${data_nascimento}', '${telefone}', '${endereco}', ${altura}, ${peso})`);
    });
}
exports.persistirPessoa = persistirPessoa;
function persistirObjetoPessoa(pessoa) {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query(`INSERT INTO pessoas 
                    (nome, cpf, data_nascimento, telefone, endereco, altura, peso) 
                    VALUES 
                    ('${pessoa.getNome()}', '${pessoa.getCPF()}', '${pessoa.getDataNascimento().getFullYear()}-${pessoa.getDataNascimento().getMonth()}-${pessoa.getDataNascimento().getDate()}', '${pessoa.getTelefone()}', '${pessoa.getEndereco()}', ${pessoa.getAltura()}, ${pessoa.getPeso()})`);
    });
}
exports.persistirObjetoPessoa = persistirObjetoPessoa;
function atualizarPessoa(id, nome, cpf, data_nascimento, telefone, endereco, altura, peso) {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query(`UPDATE pessoas
                        SET nome = '${nome}', 
                            cpf = '${cpf}', 
                            data_nascimento = '${data_nascimento}', 
                            telefone = '${telefone}', 
                            endereco = '${endereco}', 
                            altura = ${altura}, 
                            peso = ${peso}
                        WHERE id = ${id}`);
    });
}
exports.atualizarPessoa = atualizarPessoa;
function atualizarObjetoPessoa(id, pessoa) {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query(`UPDATE pessoas
                        SET nome = '${pessoa.getNome()}', 
                            cpf = '${pessoa.getCPF()}', 
                            data_nascimento = '${pessoa.getDataNascimento().getFullYear()}-${pessoa.getDataNascimento().getMonth()}-${pessoa.getDataNascimento().getDate()}', 
                            telefone = '${pessoa.getTelefone()}', 
                            endereco = '${pessoa.getEndereco()}', 
                            altura = ${pessoa.getAltura()}, 
                            peso = ${pessoa.getPeso()}
                        WHERE id = ${id}`);
    });
}
exports.atualizarObjetoPessoa = atualizarObjetoPessoa;
function listarPessoas() {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query('SELECT * FROM pessoas');
    });
}
exports.listarPessoas = listarPessoas;
function buscaPessoa(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        return banco.query(`SELECT * FROM pessoas WHERE nome LIKE '%${nome}%';`);
    });
}
exports.buscaPessoa = buscaPessoa;
function apagarPessoa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield banco.query(`DELETE FROM pessoas WHERE id = ${id}`);
    });
}
exports.apagarPessoa = apagarPessoa;
//# sourceMappingURL=banco.js.map