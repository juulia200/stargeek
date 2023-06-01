const nomedotitulo = document.getElementById("nome");
const resumo = document.getElementById("resumo");
const botao = document.getElementById("botao");
const foto = document.getElementById("foto");

var url = new URL(window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("indice");

var emaillogado;
femailLogado();

if(peditar == "true"){
    editar(pindice);
}

botao.onclick=(evento)=>{
  if((peditar = "true") || (peditar == null)){

  evento.preventDefault();
  fenvio()
  .then(result =>{
      if(result){
          let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
  dados.push(
      {
          nome : nome.value,
          descricao : resumo.value,
          foto : nomeArq,
          email: emaillogado
      }
      )
  localStorage.setItem("catalogo", JSON.stringify(dados));
  window.location.assign("catalogo.html");
  }
      else{
          alert("Houve um erro no envio do arquivo")
      }
  });

}else{

    editarenvio(evento);
    window.location.assign("catalago.html");
}

}

function editar(indice){
  nomedotitulo.value = "";
  resumo.value = "";
  foto.files[0] = null;  
  let dados = JSON.parse(localStorage.getItem("catalogo"));
  nomedotitulo.value = dados[indice].nome;
  resumo.value = dados[indice].descricao;
  fotoa= dados[indice].foto;
 
}

var fotoa
function editarenvio(evento){
  evento.preventDefault();
  if ((fotoa != foto.value) && (foto.value != "")){
     
    fenvio()
    .then(result =>{
      if(result){
        salvaEdicao(nomeArq);
      }
    });
  }
  else{
    salvarEdicao(fotoa);
  }
}

function salvaEdicao(pfoto){
  let dados = JSON.parse(localStorage.getItem("ctalogo"));
  dados[pindice].nome = nome.value;
  dados[pindice].descricao = descricao.value;
  dados[pindice].foto = pfoto;
  dados[pindice].email = emaillogado;
  localStorage.setItem("catalogo" , JSON.stringify(dados));

}

var nomeArq;
async function fenvio() { 
    const url = 'http://localhost:3005/upload';
    const arquivo = document.getElementById("foto").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(formData.values[0]));
    console.log(JSON.stringify(formData.values[1]));
    try{
         
         var resp = await fetch(url, {
                                       method: 'POST',
                                       body: formData,
                                     }
                               ) 
         console.log(resp);
         if (resp.ok){
           let respText = await resp.text();
           nomeArq = respText;
           return true;
         }
         else{
              return false;
         }
       }
    catch (error) {
        console.error(error);
        return false;
      }
}

function femailLogado(){
  let dados = sessionStorage.getItem ("logado");
  if(dados == null){
      window.location.assign("login.html");
  }else{
      emaillogado = dados;
  }
}