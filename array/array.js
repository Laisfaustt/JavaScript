let amigos = ["carlos", "joana", "marcos", "luana", "barbara",]
console.log(amigos[2])

/////////////
for (let i = 0; i < amigos.length; i++){
    console.log(amigos[i])
}
console.log("adicionando ao fim da lista")
amigos.push ("fernanda")
console.log (amigos)

console.log("remove o primerio")
amigos.shift()
console.log(amigos)
    
console.log("remove o ultimo")
amigos.pop()
console.log(amigos)

console.log("add ao incio da lista")
amigos.unshift("tati")
console.log(amigos)