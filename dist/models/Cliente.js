export class Cliente {
    id;
    nome;
    cpf;
    rg;
    dataNascimento;
    constructor(id, nome, cpf, rg, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }
}
