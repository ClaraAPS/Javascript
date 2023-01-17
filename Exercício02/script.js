function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '400px'
        img.style.height = '400px'
        img.style.borderRadius = '400px'
        if (fsex[0].checked){
            gender = 'homem'
            if (idade >=0 && idade <= 6){
                //baby
                img.setAttribute('src', 'babyBoy.jpg')
            } else if (idade > 7 && idade <= 12){
                //child
                img.setAttribute('src', 'childBoy.jpg')
            } else if (idade > 12 && idade <=18){
                //teen
                img.setAttribute('src', 'teenBoy.jpg')
            } else if (idade > 18 && idade <= 35){
                //young adult
                img.setAttribute('src', 'youngMan.jpg')
            } else if (idade > 35 && idade <= 59){
                //adult
                img.setAttribute('src', 'adultMan.jpg')
            } else {
                //elder
                img.setAttribute('src', 'olderMan.jpg')
            }
        } else if (fsex[1].checked){
            gender = 'mulher'
            if (idade >=0 && idade <= 6){
                //baby
                img.setAttribute('src', 'babyGirl.jpg')
            } else if (idade > 7 && idade <= 12){
                //child
                img.setAttribute('src', 'childGirl.jpg')
            } else if (idade > 12 && idade <=18){
                //teen
                img.setAttribute('src', 'teenGirl.jpg')
            } else if (idade > 18 && idade <= 35){
                //young adult
                img.setAttribute('src', 'youngWoman.jpg')
            } else if (idade > 35 && idade <= 59){
                //adult
                img.setAttribute('src', 'adultWoman.jpg')
            } else {
                //elder
                img.setAttribute('src', 'olderWoman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gender} e tem ${idade} anos`
        res.appendChild(img)
    }
}