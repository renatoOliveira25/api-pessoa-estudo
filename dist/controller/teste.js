"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = exports.listaPessoas = void 0;
const Pessoa_1 = require("../model/Pessoa");
const bancoDeDados_1 = require("./bancoDeDados");
exports.listaPessoas = [];
exports.pessoa = new Pessoa_1.Pessoa('José Bryan Yuri Fogaça', '10477613195', new Date(1998, 8, 29), '53984291927', 'Rua Capitão Felino Alves', 174, 102);
let pessoa2 = new Pessoa_1.Pessoa('Pedro Marcos César Santos', '92045970035', new Date(1986, 4, 22), '62999425959', 'Rua 3', 167, 76);
let pessoa3 = new Pessoa_1.Pessoa('Marcela Raquel Campos', '79202391769', new Date(1977, 6, 1), '82993578543', 'Rua Doutor Antônio Aleixo de Paes Albuquerque', 184, 64);
let pessoa4 = new Pessoa_1.Pessoa('Silvana Fernanda Rafaela Teixeira', '42169128344', new Date(1971, 2, 22), '11995340104', 'Rua Água Preta', 153, 63);
exports.listaPessoas = (0, bancoDeDados_1.persistir)(exports.pessoa);
exports.listaPessoas = (0, bancoDeDados_1.persistir)(pessoa2);
exports.listaPessoas = (0, bancoDeDados_1.persistir)(pessoa3);
exports.listaPessoas = (0, bancoDeDados_1.persistir)(pessoa4);
exports.listaPessoas.forEach(pessoa => {
    console.log(pessoa);
});
//# sourceMappingURL=teste.js.map