// estrutura condicoonal - IF ELSE 
let idade = prompt ("qual sua idade?")
console.log ("sua idade é ", idade)

if (idade >=18) {
//se//
   console.log ("voce é maior de idade")
} else {
    console.log ("voce é menor de idade")
}
console.log ("-------------------------")
//verificando se um numero é impar ou par
let numero = prompt ("escolha um numero:")
let resultado = numero % 2 //resto
if (resultado == 0){
    console.log("o numero é par")
}else{
    console.log("o numero é impar")
}

console.log ("-------------------------")

//avaliacao do aluno
let nota1 = prompt ("qual a primeira nota:")
let nota2 = prompt ("qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7){
    console.log ("aprovado")
}else{
    console.log("reprovado")
}