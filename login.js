const msg = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.onsubmit = (evt)=>{
    if (email.value == ""){
        evt.preventDefault();
        msg.innerHTML = "Digite seu e-mail";
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evt.preventDefault();
        msg.innerHTML = "Digite sua Senha!"
        senha.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado ="nok";
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            sessionStorage.setItem("logado", email.value)
            setTimeout(()=>{
                window.location.assign("catalogo.html");
            }, 2000);
            evt.preventDefault();
            logado = "ok";
            return true;
        }
        if (logado!="ok") {
            msg.innerHTML = "Usuario ou senha incorretos"
            evt.preventDefault()
            return null;
        }
    });
}

function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}




