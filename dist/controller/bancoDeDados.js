"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaPessoas = exports.persistir = void 0;
let bancoDadosPessoa = [];
function persistir(pessoa) {
    //persistindo os dados
    bancoDadosPessoa.push(pessoa);
    return bancoDadosPessoa;
}
exports.persistir = persistir;
function listaPessoas() {
    return bancoDadosPessoa;
}
exports.listaPessoas = listaPessoas;
//# sourceMappingURL=bancoDeDados.js.map