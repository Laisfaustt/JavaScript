let texto = document.getElementById("texto")
function mudartexto (){
    texto.innerText = "texto aterado"
}

function mudarcor(){
    texto.style.color="green"
    document.body.style.backgroundColor="orange"
}

let campo = document.getElementById("campo")
function trocarfundo(){
    campo.style.backgroundColor="yellow"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.src="praia.jpg"
}
function destroca(){
    imagem.src= "italia.webp"
}

let mensagem = document.getElementById("mensagem")
function outrotexto (){
    mensagem.innerText="texto alterado"
}
function voltatexto (){
    mensagem.innerText="passe o mouse"
}

let sumir = document.getElementById("sumir")
function aparecer(){
    if (sumir.style.display== "none"){
        sumir.style.display = "block"
    }else {
        sumir.style.display="none"
    }
}


let tamanho = document.getElementById("tamanho")
function aleatorio (){
    let novotamanho = Math.floor(Math.random()* (40 - 10 + 1)) + 10 //entre 10px e 40px
    tamanho.style.fontSize = novotamanho + "px"
    
}