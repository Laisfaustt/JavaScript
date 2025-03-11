//1
let img = document.getElementById("img")
function aparecer(){
    if (img.style.display== "none"){
        img.style.display = "block"
    }else {
        img.style.display="none"
    }
}

//2
let texto = document.getElementById("texto")
function mudarcor(){
    texto.style.color="white"
    document.body.style.backgroundColor="black"
}

//3
let text = document.getElementById("text")
function completar(){
   text.innerText = "Meu nome é Lais, tenho 17 anos, moro em suzano, estudo no sesi e faço o curso de TI."
}

//4
let text3 = document.getElementById("text3")
function trocar (){

    if (text3.style.color== "green"){
        text3.style.color = "yellow"
    }else if  (text3.style.color=="yellow"){
        text3.style.color="blue"
    }else if (text3.style.color == "blue"){
        text3.style.color="green"
    }else {
        text3.style.color="green"
    }
}

//5
function button (){
    alert ("Pare de clicar no botão!")
}  


//6
let text4 = document.getElementById("text4")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
img1.style.display = "none"
img2.style.display = "none"
img3.style.display = "none"

function porta1 (){
    img1.style.display = "block"
    alert ("Você ganhou um carro!")
}

function porta2 (){
    img2.style.display = "block"
    alert("Você não ganhou nada!")
}

function porta3 (){
    img3.style.display = "block"
    alert("Parabéns, você encontrou o tesouro!")
}


//7 
let imagem = document.getElementById("imagem")
function redimensionar (){
   
        let novotamanho = Math.floor(Math.random()* (30 - 20 + 1)) + 10 
        imagem.style.width = novotamanho + "px"
        imagem.style.height = novotamanho + "px"
}

//8
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")

div1.style.backgroundColor="red"

function semaforo(){
    if(div1.style.backgroundColor=="red"){
        div1.style.backgroundColor="black"
        div2.style.backgroundColor="yellow"
        div3.style.backgroundColor="black"
        alert("Atenção")
    }else if (div2.style.backgroundColor=="yellow"){
        div1.style.backgroundColor="black"
        div2.style.backgroundColor="black"
        div3.style.backgroundColor="green"
        alert("pode ir")
    }else if (div3.style.backgroundColor=="green"){
        div1.style.backgroundColor="red"
        div2.style.backgroundColor="black"
        div3.style.backgroundColor="black"
        alert("pare!")
    }
}

//9
let comedia = document.getElementById("comedia")
let romance = document.getElementById("romance")
let acao = document.getElementById("acao")

function troca1(){
    comedia.src="comedia.webp"
}
function destroca1(){
    comedia.src= "1.png"
}

function troca2(){
    acao.src="acao.avif"
}
function destroca2(){
    acao.src= "2.png"
}

function troca3(){
    romance.src="romance.webp"
}
function destroca3(){
    romance.src= "3.png"
}

