//1

let dia = Number (prompt("qual o dia?") )
switch (dia){

    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda")
        break
    case 3 :
        console.log("terca")
        break
    case 4 :
        console.log("quarta")
        break
    case 5 :
        console.log("quinta")
        break
    case 6 :
        console.log("sexta")
        break
    case 7 :
        console.log("sabado")
        break

    default:
        console.log("numero invalido. Insira um valor entre 1 e 7")
}

//2

let idade = Number (prompt("qual a idade?") )
switch (idade){

    case 5:
        console.log("infantil A")
        break
    case 10:
        console.log("infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("adulto")
        break

    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

//3

let letra = String ( prompt("qual o turno?") )
switch (letra){

    case "m":
        console.log("bom dia")
        break
    case "v":
        console.log("boa tarde")
        break
    case "n":
        console.log("Boa noite")
        break

    default:
        console.log("Turno inválido. Insira M, V ou N")
}

//4

let num = Number (prompt("qual o numero?") )
switch (num){

    case 1:
        console.log("oi")
        break
    case 2:
        console.log("ola")
        break
    case 3 :
        console.log("hi")
        break
    case 4 :
        console.log("hola")
        break
    case 5 :
        console.log("hello")
        break

    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5")
}


//5

let estacao = Number (prompt("qual a estacao?") )
switch (estacao){

    case 1:
        console.log("primavera")
        break
    case 2:
        console.log("verao")
        break
    case 3 :
        console.log("outono")
        break
    case 4 :
        console.log("iverno")
        break

    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}