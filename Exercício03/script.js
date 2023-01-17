function contar() {
    let i = document.getElementById('numInicio') // let é para criar uma variável que só vai existir nesta ocasião, ou seja, dentro desta função
    let f = document.getElementById('numFim')
    let p = document.getElementById('numPasso')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('ERRO! Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let ii = Number(i.value)
        let ff = Number(f.value)
        let pp = Number(p.value)

        if (pp <= 0){
            window.alert('ERRO! Passo inválido')
        }

        if (ii < ff) {
            //contagem crescente
            for (var x = ii; x <= ff; x += pp) {
                if (x % 2 === 0) {
                    res.innerHTML += `${x} \u{1F60F} `
                } else if (x % 3 === 0) {
                    res.innerHTML += `${x} \u{1F4A8} `
                } else if (x % 7 === 0) {
                    res.innerHTML += `${x} \u{1F965} `
                } else{
                    res.innerHTML += `${x} \u{1F426} `
                }
                           
            }
        } else {
            //contagem decrescente
            for (var x = ii; x >= ff; x -= pp) {
                if (x % 2 === 0) {
                    res.innerHTML += `${x} \u{1F60F} `
                } else if (x % 3 === 0) {
                    res.innerHTML += `${x} \u{1F4A8} `
                } else if (x % 7 === 0) {
                    res.innerHTML += `${x} \u{1F965} `
                } else{
                    res.innerHTML += `${x} \u{1F426} `
                }
                           
            }
        }

        res.innerHTML += `\u{1F340}`
    }

    
}

