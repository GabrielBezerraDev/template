const checkPassword = (dados, senha) => {
    if(senha.value === dados.senha){
        localStorage.setItem("login-coordenador", JSON.stringify(dados));
        return window.location = "pageMain.html";
    }
    else{
        alert("Algo deu errado.");
    }
};

document.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.id === "cadastrar") return window.location = "coordenador.html";
    if(e.target.id !== "confirmar") return;
    let cpf = document.getElementById("cpf");
    let senha = document.getElementById("senha");
    let dados = JSON.parse(localStorage.getItem("cadastro-coordenador"));
    console.log(cpf.value, dados[0].cpf);
    for(let i = 0; i < dados.length; i++){
        if(cpf.value === dados[i].cpf){
            dados[i].index = i;
            return checkPassword(dados[i], senha);
        }
    }
    return alert("Não foi possível encontrar o usuário.");
});

