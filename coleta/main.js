let num = 4.7

console.log (Math.round(num))//inteiro mais poximo
console.log (Math.floor(num))//arredonda para baixo
console.log (Math.ceil(num))//arredonda para cima

console.log (Math.random())//numero aleatorio entre 0 e 1
console.log (Math.random()*10)//entre 0 e 10

let texto = "eu amo javascript"
//manipular string
console.log(texto.toUpperCase())//deixa tudo maiusculo
console.log(texto.toLowerCase())//deixa tudo minusculo
console.log(texto.trim())//remove os espacos antes e depois do texto

//localizar texto
console.log(texto.charAt(5))//mostrar a letra que esta nessa posicao

//trocar textos
console.log(texto.replace("amo", "adoro"))

//funcoes numericas
let numero = "42.85"
console.log(parseInt(numero))//converte string para numero inteiro
console.log(parseFloat(numero))//converte string para numero decimal
console.log(Number(numero).toFixed(1))//define quantas casa decimais vai mostrar
