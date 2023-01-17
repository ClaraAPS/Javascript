function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'dia.jpg'
        document.body.style.background = 'rgb(251, 217, 57)'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(251, 143, 45)'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(0, 42, 92)'
    }
}
