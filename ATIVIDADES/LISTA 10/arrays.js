//1
let filmes = ["aladdin", "mufasa", "10 coisas que eu odeio em vc",]
console.log(filmes[0])

console.log("------------")

//2
let fruta = ["maça", "banana", "melancia", "pera", "uva",]
console.log(fruta[2])

console.log("------------")

//3
let cores = ["azul", "roxo", "vermelho",]
for (let i = 0; i < cores.length; i++){
    console.log(cores[i])
}
cores.push ("verde")
console.log (cores)

console.log("------------")

//4
let numeros = ["1", "2", "3", "4",]
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
numeros.pop ()
console.log (numeros)

console.log("------------")

//5
let cidade = ["suzano", "mogi",]
for (let i = 0; i < cidade.length; i++){
    console.log(cidade[i])
}
cidade.unshift("ferraz")
console.log (cidade)

console.log("------------")

//6
let animal = ["gato", "papagaio", "girafa",]
for (let i = 0; i < animal.length; i++){
    console.log(animal[i])
}
animal.shift([0])
console.log (animal)

console.log("------------")

//7
let carros = ["fiat", "camaro amarelo", "fusca", "civic",]
for (let i = 0; i < carros.length; i++){
    console.log(carros[i])
}
console.log (carros)

console.log("------------")

//8
let num = ["1", "2", "3",]
for (let i = 0; i < num.length; i++){
    console.log(num[i])
}
num.unshift("4")
console.log(num)

num.pop()
console.log(num)

num.shift()
console.log(num)
