//1
let contador = 1

do {
    console.log (contador)
    contador ++
}while (contador <= 20)

console.log ("----------")

//2
let resposta = prompt ("Deseja continuar? Digite s para SIM e n para NÃO.")
do{
    if (resposta == "s"){
        console.log("Continue")
    } 
    else {
        console.log("Pare")
    }
    resposta = prompt("Deseja continuar? Digite s para SIM e n para NÃO.?")
} while (resposta == "s")
console.log ("----------")

//3
let num = 1
let sequencia = prompt ("Escolha o numero final")
do {
    console.log(num)
    num ++
} while (num <= sequencia)
console.log ("----------")

//4
let numero = 1
do {
    console.log(numero)
    numero +=2
}while(numero <= 31)
console.log ("----------")

//5
let algoritimo = 1
do{
    let num1 = prompt ("Escolha 5 numeros:")
    if (num1 > 0){
        console.log("Positivo")
    } 
    else if (num1 < 0){
        console.log("Negativo")
    } else {
        console.log("O numero é 0")
    }
    algoritimo ++
} while (algoritimo <= 5)

//6
let resp
do{
    resp = prompt ("Deseja continuar? Digite s para SIM e n para NÃO.")
    if (resp == "s"){
        let num2 = Number(prompt("Digite 2 numeros para a soma:"))
        let num3 = Number(prompt("Digite 2 numeros para a soma:"))
        let soma = num2 + num3
        console.log(num2, "+", num3, "=", soma)
    } 
    else {
        console.log("Nao foi possivel.")
    }
} while (resp == "s")