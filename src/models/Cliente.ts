export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     rg: string;
     dataNascimento: string;

    constructor(id: number, nome: string, cpf: string, rg: string, dataNascimento: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }
}
