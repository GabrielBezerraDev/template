import { Form } from "./form.js";

document.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.id !== "enviar") return;
    let cadastro = [];
    if(JSON.parse(localStorage.getItem("cadastro-coordenador"))){
        cadastro = JSON.parse(localStorage.getItem("cadastro-coordenador"));
    }
    cadastro.push(new coordenadorCadastro());
    const opcional = ["equipe"];
    const validation = coordenadorCadastro.validation(cadastro[cadastro.length-1], opcional);
    if(validation) {
        localStorage.setItem("cadastro-coordenador",JSON.stringify(cadastro));
        window.location = "login.html"
    }
    else{
        console.log("Algo deu errado");
    }
});

class coordenadorCadastro extends Form{
    constructor(){
        super(document.getElementById("nome").value, document.getElementById("sobrenome").value, document.getElementById("cpf").value, document.getElementById("email").value,
        document.getElementById("senha").value, document.getElementById("confirmarSenha").value, document.getElementById("cargo").value, document.getElementById("description").value, "coordenador");
        this.equipe = [];
    }
}

