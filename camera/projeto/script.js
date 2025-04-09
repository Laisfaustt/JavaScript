const video = document.querySelector("video")
const filtro = document.querySelector ("#filtro")
const capturar = document.querySelector("#capturar")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

navigator.mediaDevices.getUserMedia({video:true})
    .then(stream => {
        video.srcObject = stream
    })
    .catch(err => {
        alert ("nao foi possivel acessar")
    })

filtro.addEventListener("change", () => {
    video.style.filter = filtro.value
})

capturar.addEventListener("click", () => {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeigh

    ctx.filter = filtro.value
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const imagem = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = imagem
    link.download = 'foto.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

})




