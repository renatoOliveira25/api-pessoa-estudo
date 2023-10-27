"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistir = void 0;
let bancoDadosPessoa = [];
function persistir(pessoa) {
    //persistindo os dados
    bancoDadosPessoa.push(pessoa);
    return bancoDadosPessoa;
}
exports.persistir = persistir;
//# sourceMappingURL=bancoDeDados.js.map