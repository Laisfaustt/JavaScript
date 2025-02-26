// let imagem = document.getElementById("imagem")

// imagem.addEventListener("mouseover", function(){
//     imagem.setAttribute("src", "img/italia.webp") //set = faça
// })
// imagem.addEventListener("mouseout",function(){
//     imagem.setAttribute("src", "img/praia.jpg")
// })

let lista = document.getElementById("lista")
let add = document.getElementById("add")
let remover = document.getElementById("remover")

add.addEventListener("click", function(){
    let novoItem = document.createElement ("li")
    novoItem.innerHTML = "novo item"
    lista.appendChild(novoItem)
})
remover.addEventListener("click", function(){
    if (lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})








