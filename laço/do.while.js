let contador = 0
let contador1 = 0
while (contador != 5){
    console.log("while:", contador)
    contador++
}
do{
    console.log ("do while:", contador1)
    contador1 ++
}while (contador1 != 5)


let numero = 5
do {
    console.log(numero)
    numero -=2
}while(numero >= 0)


let idade = prompt ("Qual sua idade? ")
do{
    if (idade > 0){
        console.log("Idade valida")
    }
    else{
        console.log("Idade Invalida")
    }
    idade = prompt("Qual sua Idade?")
} while (idade >= 0)
    