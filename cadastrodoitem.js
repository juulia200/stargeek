const msg = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("nome do titúlo");
const senha = document.getElementById("resumo");

formulario.onsubmit = ()=>{
    let dados = JSON.parse(localStorage.getItem("bd"));
    dados.forEach((elemento) => {
        if(elemento.email == email.value && elemento.senha == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            EventTarget.presentDefault();
            setTimeout(() => {
                window.location.assign("cadastrodoitem.html");}, 2000)
            return true;
        } else {
            msg.innerHTML = "Usuario ou senha incorreto!"
            EventTarget.presentDefault();
            return null;
        }
    });
}