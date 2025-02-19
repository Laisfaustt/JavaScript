//1
let nome = prompt ("digite seu nome")
    let saudacao = function (nome){
        console.log ("oi", nome, "Como vai?")
}
saudacao(nome)
console.log("------------")

//2
let numero1 = Number (prompt ("digite um numero"))
let numero2 = Number (prompt ("digite o segundo numero"))
    let adicao = function (numero1,numero2){
        let resultado = numero1 + numero2
        return resultado
}
console.log (adicao(numero1,numero2))
console.log("------------")

//3
let calculo = function(base,altura){
    let resultado = base * altura
    return resultado
}
console.log (calculo(800,200))
console.log("------------")

//4
let num = Number(prompt("qual o numero"))
let soma = (num)=>{
    let resultado1 = num * 2
    return resultado1
}
console.log (soma(num,2))
console.log("------------")

//5
let num1 = Number(prompt("qual o numero"))
let soma1 = (num1)=>{
    let resultado1 = num1 * num1
    return resultado1
}
console.log (soma1(num1,num1))
console.log("------------")

//6
let idade = Number (prompt("qual a idade"))
let verificar = (idade) => {
    if (idade >= 18){
        console.log ("maior de idade")
    } else 
        console.log ("menor de idade")
}
console.log(verificar(idade))
console.log("------------")

//7
let nume1 = Number (prompt ("digite um numero"))
let nume2 = Number (prompt ("digite o segundo numero"))
let nume3 = Number (prompt ("digite o terceiro numero"))
    let calcular = function (nume1, nume2, nume3){
        let result = nume1 + nume2 + nume3 / 3
        return result
}
console.log (calcular(nume1,nume2, nume3, 3))


