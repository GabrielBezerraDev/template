let dadosCoordenador = JSON.parse(localStorage.getItem("cadastro-coordenador"));
let dadosMembros = JSON.parse(localStorage.getItem("cadastro-membro"));
let currentCoordenador = JSON.parse(localStorage.getItem("login-coordenador"));
let select = document.getElementById("selecionar");

const createTable = (atualDados) =>{
    if(atualDados.posto !== "membro") return;
    let sectionMembros = document.querySelector(".membros");
    let membroTable = document.createElement("table");
    let rotulos = ["Nome completo: ","Email: ","CPF: ","Cargo: ","Descrição do cargo: ","Inicio das atividades: ",
    "Data da entrega: "];
    atualDados = {
        nome: `${atualDados.nome} ${atualDados.sobrenome}`,
        email: `${atualDados.email}`,
        cpf: `${atualDados.cpf}`,
        cargo: `${atualDados.cargo}`,
        description: `${atualDados.description}`,
        inicioAtividades: `${atualDados.dataInicio}`,
        entregaAtividades: `${atualDados.dataEntrega}`
    }
    sectionMembros.appendChild(membroTable);
    membroTable.id = "membroTable";
    for(let i = 0; i < Object.keys(atualDados).length; i++){
        let tr = document.createElement("tr");
        document.getElementById("membroTable").appendChild(tr);
        tr.classList = "membroTr";
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = rotulos[i]+Object.values(atualDados)[i];
    };
};

const setDados = (atualDados) => {
    document.getElementById("nome").innerHTML = atualDados.nome;
    document.getElementById("cargo").innerHTML = atualDados.cargo;
    document.getElementById("dataInicio").innerHTML = atualDados.dataInicio;
    createTable(atualDados);
}

const checkDados = (dadoasAtuais) => {
    let atualMembro = "";
    if(dadoasAtuais) {
    atualMembro = select.options[select.selectedIndex].innerHTML;
    for(let i = 0; i < dadosCoordenador[currentCoordenador.index].equipe.length; i++){
        if(atualMembro === dadosMembros[dadosCoordenador[currentCoordenador.index].equipe[i]].nome){
            setDados(dadosMembros[dadosCoordenador[currentCoordenador.index].equipe[i]]);
            break;
        }
    }
    }
}

if(dadosCoordenador){
    for(let i = 0; i < dadosCoordenador[currentCoordenador.index].equipe.length; i++){
        let newElement = document.createElement("option");
        console.log(dadosCoordenador[currentCoordenador.index].equipe[i]);
        if(dadosMembros) {
            newElement.innerHTML = dadosMembros[dadosCoordenador[currentCoordenador.index].equipe[i]].nome; 
            select.appendChild(newElement);
            checkDados(dadosMembros[dadosCoordenador[currentCoordenador.index].equipe[i]]);
        }
    }
}

document.addEventListener("click", ({target}) =>{
    if(target.id === "selecionar") checkDados();
    if(target.classList[0] === "adicionar") return window.location = "editar.html"
});


function evento(){
    document.addEventListener("click", listener);
}

const listener = ({target}) => {
    const photoUser = document.getElementById(`${target.classList[2]}`);
    console.log("TESTANDO");
    console.dir(target);
    const element = target.parentNode.parentNode;
    console.log(target);
    document.removeEventListener("click", listener);
    if(target.classList[1] === "glyphicon-camera"){
        photoUser.addEventListener("change", ({target}) => listenerTwo(target,element, photoUser));        
    }
    else{
        evento();
    }
}

const listenerTwo = (target, element, photoUser) => {
    photoUser.removeEventListener("change", listenerTwo);
    console.log("OUVIU");
    const file = target.files[0];
    if(file){
        const reader = new FileReader();
        reader.addEventListener("load", ({target}) => listenerThree(target, element, reader));
        reader.readAsDataURL(file);
    }
    evento();
}

const listenerThree = (target,element, reader) => {
    reader.removeEventListener("load", listenerThree);
    const readerTarget = target;
    const image = document.createElement("img");
    image.src = readerTarget.result;
    image.classList.add("pictureImage");
    element.appendChild(image);
}
evento();



