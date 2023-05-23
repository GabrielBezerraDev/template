export class Form{
    constructor(nome, sobrenome, cpf, email, senha, confirmarSenha, cargo, description, posto){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
        this.cargo = cargo;
        this.description = description;
        this.posto = posto;
    }

    static validation(datas, opcional){
        console.log("Essa foi");
        for(let i = 0; i < Object.entries(datas).length; i++){
            if(Object.entries(datas)[i][1] === ""){
                if(opcional){
                    for(let j = 0; j < opcional.length; j++){
                        if(Object.entries(datas)[i][0] === opcional[j]) break;
                        if(j === opcional.length-1) return false;
                    }   
                }
                else{
                    return false;
                }
            }
        }
        return this.checkPassword(datas);
    }

    static checkPassword(datas){
        if(datas.senha === datas.confirmarSenha) return true;
        console.log("As senhas não são iguais");
        return false;
    }
}
