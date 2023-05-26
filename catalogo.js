const cards = document.querySelector(".cards");

var url = new URL(window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("indice");

if(peditar == "true"){
    editar(pindice);
}

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `
        <div class="cardimgb"><img src="img/${elemento.foto}"></div> 
        <div class="nome">${elemento.nome}</div>
        <div class="descricao">${elemento.descricao}</div>
        <div class="cardbtn">
        <img src="imagens/lixo.png" alt="" onclick="excluir(${indice})"> 
        <img src="imagens/caneta.png" alt="" onclick="editar(${indice})">
        </div>`;
        cards.appendChild(divcard);
    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}



function editar(indice){
    var url ="cadastroitem.html?peditar=true&indice="+encodeURIComponent(indice);
    window.location.href = url;

}

botaomodal.onclick = () =>{
    window.location.assign("cadastrodoitem.html");
}

function femaillogado(){
    let dados = JSON.perse(sessionStorage.getItem)
}