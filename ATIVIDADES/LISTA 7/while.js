//1
let contador = 1
while (contador <= 10){
    console.log(contador)
    contador += 1
}
console.log("----------------")

//2
let numero = prompt ("digite um numero")
let multiplicador = 1
while (multiplicador <= 10){
    let resultado = numero * multiplicador
        console.log (numero, "x", multiplicador, "=", resultado)
        multiplicador += 1
}
console.log("----------------")

//3
let contagem = 10
while (contagem >= 1){
    console.log(contagem)
    contagem --
}
console.log("----------------")

//4
let senha = prompt ("digite a senha")
while (senha != "12345"){
    senha=prompt ("tente novamente: ")
    if (senha == "12345"){
        console.log("bem-vindo")
    }
}
console.log("----------------")

//5
let contador2 = 50
while (contador2 <= 100){
    console.log(contador2)
    contador2 += 1
}
console.log("-----------")

//6
let contador3 = 0
while (contador3 <= 100){
    console.log(contador3)
    contador3 += 5
}

console.log("----------------")

//7
let algoritimo = "eu gosto de java"
let num = 1 
while (num <= 5){
    console.log (algoritimo)
    num ++
}
console.log("----------------")

//8
let nome = prompt ("escreva seu nome")
let num1 = Number(prompt("digite um numero"))
while (num1 >= 1){
    console.log(nome)
    num1 --
}

