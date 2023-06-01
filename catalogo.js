const cards = document.querySelector(".cards");

var url = new URL(window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("indice");
var emaillogado;
femailLogado();

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
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `
        <div class="cardimgb"><img src="img/${elemento.foto}"></div> 
        <div class="cardnome">${elemento.nome}</div>
        <div class="descricao">${elemento.descricao}</div>
        <div class="cardbtn">
        <img src="imagens/lixo.png" alt="" onclick="excluir(${indice})"> 
        <img src="imagens/caneta.png" alt="" onclick="editar(${indice})">
        </div>`;
        cards.appendChild(divcard);}
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



function femailLogado(){
    let dados = sessionStorage.getItem ("logado");
    if(dados == null){
        window.location.assign("login.html");
    }else{
        emaillogado = dados;
    }
  }