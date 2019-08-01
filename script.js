let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confimacaoEmail = document.querySelector("#confimacaoEmail");
let senha = document.querySelector("#senha");
let botao = document.querySelector("#BOTAO");
let sexo = document.querySelector("#sexo");
let div = document.querySelector("div");
let section = document.querySelector("section");
let h2 = document.querySelector("h2");
let a = document.querySelector("a");

function cadastro() {
    if(email.value !== "" && email.value === confimacaoEmail.value){
        localStorage.setItem("sexo" ,sexo.value);
        localStorage.setItem("nome" , nome.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("confimacaoEmail" ,confimacaoEmail.value); 
        localStorage.setItem("senha" ,senha.value);
        div.style.display = "none";
        section.style.display = "initial";
        h2.inner.HTML = `Seja bem vindo ${localStorage.nome}`;
        a.inner.HTML = `Seu email e ${localStorage.email}`;
    }else{
        alert("erro")
    }
}
function resetar(){
    localStorage.clear();

}

botao.onclick = cadastro;
a.onclick = resetar;