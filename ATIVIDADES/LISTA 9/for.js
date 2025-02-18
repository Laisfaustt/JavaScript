//1
for (let contador = 1; contador <= 30; contador++) {
    console.log (contador)
}
console.log("---------------------")

//2
for (let c = 30; c >= 1; c--) {
    console.log (c) 
}
console.log("---------------------")

//3
for (let cont = 1; cont <= 5; cont ++){
   let num = prompt ("digite cinco numeros")
 if (num >= 50) {
    console.log ("acima da media")
} else {
    console.log ("abaixo da media")
}}
console.log("---------------------")

//4
let numero = prompt ("digite um numero")
for (let mult = 1; mult <= 10; mult ++){
    let resultado = mult * numero
    console.log (resultado)
}
console.log("---------------------")

//5
let num1 = prompt("Escolha quantos patinhos vão passear:")
for (let algo = 1; algo <=1; algo++) {
    sub = num1 - 1
    console.log(num1, "foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só", sub, "patinhos voltaram de lá. Que se repete até que nenhum patinho voltou de lá.Ao final, todos os patinhos voltam:A mamãe patinha foi procurarAlém das montanhasNa beira do marA mamãe gritou: Quá, quá, quá, quáE os patinhos voltaram de lá.")
}
console.log("----------------------")

//6
for(let cont1 = 1; cont1 <= 10; cont1++ ) {
    idade = prompt("Digite 10 idades:")
    if (idade >= 18){
    console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
console.log("---------------------")


//7
for(let conti = 1; conti <= 5; conti++ ) {
    votos = prompt("Digite 5 votos:")
    if (votos == 5){
    console.log("Voto nulo")
    } else if (votos == 6) {
        console.log("voto em branco")
    } else {
        console.log("voto para os respectivos candidatos")
    }
}
