let contador = 0

while (contador <= 5){
    console.log(contador)
    contador++
}

console.log("........................")

let numero = 3
let multiplicador = 1
while (multiplicador <= 4){
    let resultado = numero * multiplicador
    console.log (numero, "x", multiplicador, "=", resultado)
    multiplicador += 1
}

let palavra = prompt ("digite a palavra")
while (palavra != "oi"){
    palavra=prompt ("tente novamente: ")
    if (palavra == "oi"){
        console.log("acertou")
    }
}