import { Pessoa } from "../model/Pessoa";
import { persistir } from "./bancoDeDados";

export let listaPessoas: Pessoa[] = [];

export let pessoa = new Pessoa('José Bryan Yuri Fogaça',
    '10477613195',
    new Date(1998, 8, 29),
    '53984291927',
    'Rua Capitão Felino Alves',
    174,
    102);

let pessoa2 = new Pessoa('Pedro Marcos César Santos',
    '92045970035',
    new Date(1986, 4, 22),
    '62999425959',
    'Rua 3',
    167,
    76);

let pessoa3 = new Pessoa('Marcela Raquel Campos',
    '79202391769',
    new Date(1977, 6, 1),
    '82993578543',
    'Rua Doutor Antônio Aleixo de Paes Albuquerque',
    184,
    64);

let pessoa4 = new Pessoa('Silvana Fernanda Rafaela Teixeira',
    '42169128344',
    new Date(1971, 2, 22),
    '11995340104',
    'Rua Água Preta',
    153,
    63);

listaPessoas = persistir(pessoa);
listaPessoas = persistir(pessoa2);
listaPessoas = persistir(pessoa3);
listaPessoas = persistir(pessoa4);

listaPessoas.forEach(pessoa => {
    console.log(pessoa);
})