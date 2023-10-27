"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const bancoDeDados_1 = require("../controller/bancoDeDados");
class Pessoa {
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    /**
     * Retorna o nome da pessoa
     *
     * @returns nome : nome da pessoa
     */
    getNome() {
        return this.nome;
    }
    /**
     * Atribui o parâmetro ao atributo nome
     *
     * @param _nome : nome da pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     * Retorna o CPF da pessoa
     *
     * @returns cpf : cpf da pessoa
     */
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getDataNascimento() {
        return this.data_nascimento;
    }
    setDataNascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    /**
     * Atribui peso a pessoa
     *
     * @param _peso
     *  peso da pessoa
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de nascimento: ${this.data_nascimento.getUTCDate()}/${this.data_nascimento.getMonth()}/${this.data_nascimento.getFullYear()}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`);
    }
    // implementar os métodos
    falar() {
        // lógica de negócio
        console.log(`${this.nome} está falando...`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando...`);
    }
    andarQuilometros(quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${quilometros} quilometros`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
    comerPrato(prato) {
        console.log(`${this.nome} está comendo ${prato}`);
    }
    cadastrarPessoa(baninha) {
        //persistindo os dados
        try {
            (0, bancoDeDados_1.persistir)(baninha);
        }
        catch (_a) {
            console.error(`${Error}`);
        }
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map