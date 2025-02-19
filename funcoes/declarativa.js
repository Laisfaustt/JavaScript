//sem parametro
function mostrarmensagem (){
    console.log ("ola")
}
mostrarmensagem () //usamos isso para chamar a funcao

function contaratetres (){
    for(let i = 1; i <= 3; i++){
        console.log(i)
    }
}
contaratetres ()


//com parametro 
function somar (a,b){
    let resultado = a + b
    return resultado
}
console.log(somar(3,7))
console.log(somar(90,9))
console.log(somar(3,2))

function quadrado (numero){
    let quadrado = numero * numero
    return quadrado
}
console.log(quadrado(prompt ("digite um numero")))
console.log(quadrado(7))