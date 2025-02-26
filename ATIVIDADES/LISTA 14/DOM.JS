//1
let botao1 = document.getElementById("botao1")
botao1.addEventListener("click", function(){
    botao.style.background = "orange"
})

botao1.addEventListener("dblclick", function(){
    botao1.style.background="purple"
})

//2
let curtida = document.getElementById("curtida")
let pg = document.getElementById("pg")
let curtir = 0
curtida.addEventListener("click" , function() {
 
   curtir++
   pg.innerText=curtir
})

//3
//ex3
let par1 = document.getElementById("par1")
let par2 = document.getElementById("par2")
let par3 = document.getElementById("par3")
let par4 = document.getElementById("par4")
let par5 = document.getElementById("par5")
let bot = document.getElementById("bot")
bot.addEventListener("click" , function() {
    par1.innerText="Eu gosto de JavaScript"
     par2.innerText="Eu gosto de JavaScript"
      par3.innerText="Eu gosto de JavaScript"
       par4.innerText="Eu gosto de JavaScript"
        par5.innerText="Eu gosto de JavaScript"

})

//ex4
let lais = document.getElementById("lais")
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
if (lais.lastChild) {
    lais.removeChild(lais.lastChild)
    botao.innerText = "Mensagem Enviada"
} 
})

//ex5
let tex1 = document.getElementById("tex1")
let aju = document.getElementById("aju")
aju.addEventListener("click" ,   function() {
    tex1.style.display = "flex"
})

//ex6
let div = document.getElementById("div")
let bot2 = document.getElementById("bot2")
let bot3 = document.getElementById("bot3")
bot2.addEventListener("click" , function (){
if(div.style.width = "200px")
    (div.style.height = "200px")
(div.style.backgroundColor = "blue")
})
bot3.addEventListener("click" , function (){
    if(div.style.borderRadius ="100px" )
        (div.style.backgroundColor = "red")
})


