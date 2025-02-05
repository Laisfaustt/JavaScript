//verificar se a pessoa pode votar

let idade = 20
let tituloeleitor = true

if (idade >= 18 && tituloeleitor == true){
    console.log ("pode votar")
} else {
    console.log("nao pode votar")
}

//verificar se o numero esta dentro do intervalo
let numero = 15
if (numero >= 10 && numero <= 20){
    console.log ("o numero esta entre 10 e 20")
} else{
    console.log("o numero esra fora do intervalo")
}

//comporar com desconto 
let valor = 150
let clientevip = false

if (valor >= 100 || clientevip == true){
    console.log ("vc ganhou frete")
} else{
    console.log("tem que pagar frete")
}

//numero no intervalo
let num = 10
if (num >= 5 || num <=20){
    console.log("funcionou")
}else {
    console.log("nao funcionou")
}