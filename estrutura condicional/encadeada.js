//numero positivo, negativo ou zero 
let numero = number (prompt ("escolha um numero"))

if (numero > 0){
    console.log("numero negativo")
} else if (numero < 0){
    console.log ("numero positivo")
} else {
    console.log ("zero")
}

console.log("----------")

let nota = number (prompt("qual é a nota?"))
if (nota >= 9){
    console.log ("exelente")
} else if (nota >= 7) {
    console.log("bom")
}  else if (nota >= 5) {
    console.log("regular")
} else {
    console.log ("ruim")
}