let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confimacaoEmail = document.querySelector("#confimacao de email");
let senha = document.querySelector("#senha");
let botao = document.querySelector("#BOTAO");
let sexo = document.querySelector("#sexo");

function cadastro() {
    if(email.value === confimacaoEmail.value){
        localStorage.setItem("sexo" ,sexo.value);
        localStorage.setItem("nome" , nome.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("confimacao de email" ,confimacaoEmail.value); 
        localStorage.setItem("senha" ,senha.value);
    }
}

botao.onclick = cadastro;