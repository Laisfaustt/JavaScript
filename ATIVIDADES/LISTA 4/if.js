//1
let idade = prompt ("qual sua idade?")

if (idade <= 12){
    console.log("crinca")
} else if (idade <= 17) {
    console.log("adolescente")
}  else if (idade <= 59) {
    console.log("adulto")
} else {
    console.log ("idoso")
}

//2 
let temp = prompt ("qual a temperatura?")

if (temp <= 10){
    console.log("muito frio")
} else if (temp <= 20) {
    console.log("frio")
}  else if (temp <= 30) {
    console.log("agradavel")
} else {
    console.log ("muito quente")
}

//3 
let turno = prompt ("qual seu turno de estudos?")

if (turno == "m"){
    console.log("bom dia")
} else if (turno == "v") {
    console.log("boa tarde")
}  else if (turno == "n") {
    console.log("boa noite")
} else {
    console.log ("turno invalido")
}

//4 
let compra = prompt ("qual o valor?")

if (compra <= 100){
    console.log("desconto de 5%")
} else if (compra <= 200) {
    console.log("desconto de 10%")
}  else { (compra > 200) 
    console.log("desconto de 15%")
} 

//5 
let num = prompt ("qual a nota?")

if (num >= 90){
    console.log("A")
} else if (num >= 80) {
    console.log("B")
}  else if (num >= 70) {
    console.log("D")
}  else if (num >= 60) {
    console.log("D")
} else {
    console.log ("F")
} 

//6
let dia = prompt ("qual o numero?")

if (dia == 1){
    console.log("domingo")
} else if (dia == 2) {
    console.log("segunda")
}  else if (dia == 3) {
    console.log("terca")
}  else if (dia == 4) {
    console.log("quarta")
}  else if (dia == 5) {
    console.log("quinta")
}  else if (dia == 6) {
    console.log("sexta")
}  else if (dia == 7) {
    console.log("sabado")
}

//7
let distancia = prompt ("qual a distancia?")

if (distancia <= 400){
    console.log("pista curta")
} else if (distancia <= 800) {
    console.log("pista media")
}  else if (distancia <= 1500) {
    console.log("pista longa")
} else {
    console.log ("pista muito longa")
} 

//8
let pontuacao = prompt ("qual a pontuacao?")

if (pontuacao <= 1000){
    console.log("iniciante")
} else if (pontuacao <= 5000) {
    console.log("inter")
}  else if (pontuacao <= 10000) {
    console.log("avancado")
} else {
    console.log ("mestre")
} 