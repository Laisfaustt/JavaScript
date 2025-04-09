const tarefas = document.queryselectorAll(".tarefa")
const colunas = document.querySelectorAll(".tarefas")


tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", ()=>{
        tarefa.classList.add("arrastando")
    })
    tarefa.addEventListener("dragend", ()=> {
        tarefa.classlist.remove("arrastando")
    })
})
colunas.forEach(coluna => {
    coluna.addEventListener("dragover", (e) => {
        e.preventDefault()
        const tarefaArrastando = document.querySelectorAll(".arrastando")
        coluna.appendChild(tarefaArrastando)
    })
})

