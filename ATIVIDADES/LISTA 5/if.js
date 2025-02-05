//1
let idade = prompt ("qual sua idade?") 
let carteira = true

if (idade >= 18 && carteira == true){
    console.log ("pode dirigir")
} else {
    console.log("nao pode dirigir")
}

//2
let projetos = prompt ("quanos projetos realizou?")

if (projetos >= 5 && projetos <= 10){
    console.log ("vc esta elegivel para a promocao")
} else{
    console.log("vc nao esta elegivel para a promocao")
}

//3
let ida = prompt ("qual sua idade para a festa")

if (ida >= 18 && ida <= 30){
    console.log ("vc pode entrar no evento")
} else{
    console.log("vc nao pode entrar no evento")
}

//4
let num = ("qual a idade do candidato")
let experiencia = true

if (num >= 21 && experiencia == true){
    console.log ("vc foi aceito para a vaga")
} else{
    console.log("vc não foi aceito para vaga")
}

//5
let usuario = prompt ("qual o ususario?")
let senha = prompt ("qual a senha?")

if (usuario = "admin" && senha == 1234){
    console.log ("login bem-sucedido")
} else{
    console.log("nome de usuario ou senha incorretos")
}

//6 
let intervalo = prompt ("escreva um numero")

if (intervalo >= 10 && intervalo <=20){
    console.log("O número está dentro do intervalo entre 10 e 20")
}else if (intervalo >= 30 && intervalo <=50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log ("ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}


//7
let num1 = prompt ("escolha um numero")

if (num1 <= 10 || num1 >=100){
    console.log("O número é aceito")
}else if (num1 == 50) {
    console.log("O número é aceito")
} else{
    console.log("O número não é aceito")
} 
