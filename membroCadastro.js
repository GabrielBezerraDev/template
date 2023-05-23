import { Form } from "./form.js";
let arrayMembros = [];
let arrayCoordenador = "";
let currentCoordenador = "";
document.addEventListener("click", (e) => {
    if(e.target.id !== "confirmar") return;
    e.preventDefault();
    arrayCoordenador = JSON.parse(localStorage.getItem("cadastro-coordenador"));
    currentCoordenador = JSON.parse(localStorage.getItem("login-coordenador"));
    if(JSON.parse(localStorage.getItem("cadastro-membro"))) arrayMembros = JSON.parse(localStorage.getItem("cadastro-membro"));
    arrayMembros.push(new membroCadastro());
    arrayCoordenador[currentCoordenador.index].equipe.push(arrayMembros.length-1);
    arrayMembros[arrayMembros.length-1].coordenador = currentCoordenador.index;
    localStorage.setItem("cadastro-coordenador",JSON.stringify(arrayCoordenador));
    localStorage.setItem("cadastro-membro",JSON.stringify(arrayMembros));
});

class membroCadastro extends Form{
    constructor(){
        super(document.getElementById("nome").value, document.getElementById("sobrenome").value, document.getElementById("cpf").value, document.getElementById("email").value,
        document.getElementById("senha").value, document.getElementById("confirmarSenha").value, document.getElementById("cargo").value, document.getElementById("description").value,"membro");
        this.dataInicio = document.getElementById("dataInicio").value;
        this.dataEntrega = document.getElementById("dataEntrega").value;
        this.dataAlerta = document.getElementById("dataAlerta").value;
    }
}