import { Pessoa } from "../model/Pessoa";

let bancoDadosPessoa: Pessoa[] = [];

export function persistir(pessoa: Pessoa) {
    //persistindo os dados

    bancoDadosPessoa.push(pessoa);
    return bancoDadosPessoa;
}