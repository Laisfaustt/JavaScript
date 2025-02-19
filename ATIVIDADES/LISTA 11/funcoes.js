//1
function javascript (){
    console.log ("eu gosto de javascript")
}
javascript ()
console.log("------------")

//2
function contaratecinco (){
    for(let i = 1; i <= 5; i++){
        console.log(i)
    }
}
contaratecinco ()
console.log("------------")

//3
function saudacao (){
    let nome = prompt ("digite seu nome")
    console.log("Olá,", nome, "Seja bem-vindo(a)!" )
}
saudacao()
console.log("------------")

//4
function mult (a,b){
    let resultado = a * b
    return resultado
}
console.log(mult(5,3))
console.log("------------")

//5
function verificaridade (){
    let idade = prompt ("qual sua idade?")
    if (idade >= 18){
        console.log ("maior de idade")
    } else {
        console.log ("menor de idade")
    }
}
verificaridade()
console.log("------------")

//6
function soma (a,b){
    let result = a + b
    return result
}
console.log(soma(5,3))
console.log("------------")

//7
function calcularAreaRetangulo (a,b){
    let result1 = a * b
    return result1
}
console.log(calcularAreaRetangulo(50,30))
console.log("------------")

//8
function compararIdade  (){
    let idade1 = prompt ("qual sua idade?")
    let idade2 = prompt ("qual sua idade?")
    if (idade1 > idade2){
        console.log ("vc é mais velho")
    } else {
        console.log ("vc é mais novo")
    }
}
compararIdade()


