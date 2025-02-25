//1
let texto = document.getElementById("texto")
texto.style.color = "pink"

let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    texto.style.color = "red"
})

//2
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function(){
    botao2.style.backgroundColor = "orange"
})

//3
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    duplo.style.fontSize = "16px"
})

//4
let passe = document.getElementById("passe")
passe.addEventListener("mousemove", function(){
    passe.innerText = "o mouse esta aqqui"
    passe.style.backgroundColor = "blue"
})

passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "pink"
})

//5
let iamgem = document.getElementById("imagem")

let botao3 = document.getElementById("botao3")
botao3.addEventListener("click", function(){
    imagem.style.width = "200px"
    imagem.style.height = "200px"
})

//6
let iamgem2 = document.getElementById("imagem2")

let botao4 = document.getElementById("botao4")
botao4.addEventListener("click", function(){
    imagem2.style.width = "200px"
    imagem2.style.height = "200px"
    imagem2.style.borderRadius= "200px"
})

//7
let pg1 = document.getElementById("pg1")
pg1.style.color = "black"

let button1 = document.getElementById("button1")
button1.addEventListener("click", function(){
    pg1.style.color = "green"
    button1.style.backgroundColor = "green"
})

let pg2 = document.getElementById("pg2")
pg2.style.color = "black"

let button2 = document.getElementById("button2")
button2.addEventListener("click", function(){
    pg2.style.color = "red"
    button2.style.backgroundColor = "red"
    pg2.style.fontSize = "50px"
})

let pg3 = document.getElementById("pg3")
pg3.style.color = "black"

let button3 = document.getElementById("button3")
button3.addEventListener("click", function(){
    pg3.style.color = "blue"
    button3.style.backgroundColor = "blue"
    pg3.style.fontSize = "50px"
    button3.style.borderRadius= "50px"
    pg3.style.borderRadius= "50px"
})