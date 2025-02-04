//1
let idade = prompt ("qual sua idade?")
console.log ("sua idade é ", idade)

if (idade >=18) {
   console.log ("voce é maior de idade")
} else {
    console.log ("voce é menor de idade")
}

//2
let numero = prompt ("escolha um numero:")
let resultado = numero % 2 //resto
if (resultado == 0){
    console.log("o numero é par")
}else{
    console.log("o numero é impar")
}

//3
let nota1 = prompt ("qual a primeira nota:")
let nota2 = prompt ("qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7){
    console.log ("aprovado")
}else{
    console.log("reprovado")
}

//4
let idade2 = prompt ("qual sua idade?")

if (idade2 >=18) {
   console.log ("Entrada permitida")
} else {
    console.log ("entrada negada")
}

//5
let senha = prompt ("qual é a senha?")
if (senha == 1234) {
    console.log ("senha correta")
 } else {
     console.log ("senha incorreta")
 }

//6
let temperatura = prompt ("qual é a sua temperatura?")
if (temperatura >= 30) {
    console.log ("está quente")
 } else {
     console.log ("está frio")
 }

//7 
let num = prompt ("escolha um numero")

if (num < 0){
    console.log("numero negativo")
} else {
    console.log ("numero positivo")
}