let titulo = document.getElementById("titulo")
console.log(titulo.innerText)

let texto = document.getElementById("texto")
texto.innerText = "texto alternado"
texto.style.color = "pink"

let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    alert("botao clicado")
    botao.style.color = "orange"
})

let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    alert("duplo clicado")
    duplo.style.backgroundColor = "purple"
})

let passe = document.getElementById("passe")
passe.addEventListener("mousemove", function(){
    passe.innerText = "o mouse esta aqqui"
    passe.style.backgroundColor = "orange"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "pink"
    passe.style.fontSize = "16"

})