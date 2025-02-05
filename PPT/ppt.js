const escolhajogador = prompt ("escolha pedra, papel e tesoura:")

const escolhaPc = ["pedra", "papel", "tesoura"] [Math.floor(Math.random() * 3)]
//gera uma escolgha aleatoria para o computador
//criamos um array com as opcoes e usamos o random para escolher uma forma aleatoria 

alert (`vc escolheu ${escolhajogador}`) 
alert (`o computador escolheu ${escolhaPc}`)

if (escolhajogador == escolhaPc){
    alert("empate")
} else if (escolhajogador == "pedra" && escolhaPc == "tesoura"){ //primeira vereficacao
    alert ("vc venceu")
} else if (escolhajogador == "tesoura" && escolhaPc == "papel"){ //segunda vereficacao
    alert ("vc venceu")
} else if (escolhajogador == "papel" && escolhaPc == "pedra"){ //tecreira vereficacao
    alert ("vc venceu")
} else {
    alert ("vc perdeu")
}
    