// CONTROLE FINANCEIRO - SCRIPT.JS
// Pegando os elementos do HTML
const corpoTabela = document.querySelector("tbody")
const campoDescricao = document.querySelector("#descricao")
const campoValor = document.querySelector("#valor")
const campoTipo = document.querySelector("#tipo")
const botaoAdicionar = document. querySelector("#botao-adicionar")

const spanEntradas = document. querySelector(".valor-entradas")
const spanSaidas = document. querySelector(".valor-saidas")
const spanTotal = document.querySelector(".valor-total")

let listarItens

botaoAdicionar. addEventListener("click", () =>{
    // Verificando se algum campo está vazio
    if(campoDescricao.value == "" || campoValor. value == "" || campoTipo.value == ""){
    return alert("Preencha todos os campos")
    }

// Criando um objeto com os valores
listarItens.push({
    descricao: campoDescricao.value,
    valor: Math.abs(campoValor.value).toFixed(2),
    tipo: campoTipo.value
    })
    salvarItensBD()
    carregarItens ()
    // Deixa os campos em branco novamente
    campoDescricao. value = ""
    campoValor.value = ""
})

// Funcao para remover um item
function removerItens (indice) {
    listarItens.splice(indice, 1)
    salvarItensBD()
    carregarItens ()
}
//Funçao para inserir um item
function inserirItem(item, indice){
    let linha = document.createElement("tr")//criando uma linha na tabela

    let iconeTipo = ""
    if(inserirItem.tipo == "entrada"){
        iconeTipo = "entrada"
    }else{
        iconeTipo="saida"
    }

    linha.innerHTML=`
        <td>${item.descricao}</td>
        <td>R$ ${item.valor}</td>
        <td class="coluna-tipo"><p>${iconeTipo}</p></td>
        <td class="coluna-acao">
            <button onclick="removerItens(${indice})">Remover</button>
        </td>`

    corpoTabela.appendChild(linha)
}

// Carregar a tabela com os itens criados
function carregarItens () {
    listarItens = obterItensBD()
    corpoTabela.innerHTML = ""
    listarItens.forEach((item, indice) => {
    inserirItem(item, indice)
    })
    calcularTotal()
}
// calcular o total de entrada, saída e quanto restou
function calcularTotal() {
    let totalEntradas = 0
    let totalSaidas = 0
    
    listarItens.forEach((item) => {
        const valor = Number (item. valor)
        if(item.tipo == "Entrada") {
            totalEntradas += valor
        } else if (item.tipo == "Saída"){
            totalSaidas += valor
        }
    })

    const saldoTotal = (totalEntradas - totalSaidas) . toFixed(2)
    const totalEntradaFixado = totalEntradas.toFixed(2)
    const totalSaidaFixado = totalSaidas.toFixed(2)

    spanEntradas. innerHTML = totalEntradaFixado
    spanSaidas. innerHTML = totalSaidaFixado
    spanTotal. innerHTML = saldoTotal
}
const obterItensBD = () => JSON.parse(localStorage.getItem("bd_itens")) ?? []
const salvarItensBD = () => localStorage.setItem("bd_itens", JSON.stringify(listarItens))
    
carregarItens()




















