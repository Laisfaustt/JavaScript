const perguntas = [
    {
        pergunta: "qual o nome do primeiro livro da saga HP",
        opcoes: ["Harry Potter e a pedra filosofal", "Harry Potter: o inicio","Harry Potter e o calice de fogo"],
        correta: 0
    },
    {
        pergunta: "Qual o nome da varinha mais poderosa",
        opcoes: ["hedrux", "a varinha das varinhas","wiki de wiki", "patronus"],
        correta: 1
    },
    {
        pergunta: "sirius se transformava em qual ",
        opcoes: ["cachorro caramelo", "veado","cão preto", "fenix"],
        correta: 2
    },
]

// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opcao o usuario selecionou

const pergunta = document.getElementById ( "pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// funcao que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//funcao que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores

    // Cria um botao para cada opcao de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement ("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () =>
        selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice){
    opcaoSelecionada = indice
    // Atualiza o visual da opção selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima
}

function mostrarPontuacao ( ) {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}    
// Funcao para ir para a proxima pergunta
botaoProxima.addEventListener ( "click", () =>{
    // Verifica se a resposta esta correta
    if(opcaoSelecionada == perguntas [perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()
    
    perguntaAtual++
    if(perguntaAtual < perguntas. length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

//Botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuacao final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
// Inicia o quiz com a primeira pergunta
mostrarPergunta()


    
    


































































