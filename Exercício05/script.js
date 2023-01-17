let numeros = document.getElementById('num')
let caixa = document.getElementById('caixa')
let res = document.getElementById('res')
let num = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numeros.value) && !inLista(numeros.value, num)) {
        num.push(Number(numeros.value))
        let item = document.createElement('option')
        item.text = `Número ${numeros.value} adicionado`
        caixa.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    numeros.value = '' // apagar o numero anterior para poder colocar o próximo numero
    numeros.focus() // colocar o cursor para poder escrever o próximo numero

}

function finalizar() {
    if (num.length == 0) {
        window.alert('Adicione algum número')
    } else {
        let comprimento = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media = 0

        for (let i in num) {
            soma += num[i]
            if (num[i] > maior)
                maior = num[i]
            if (num[i] < menor)
                menor = num[i]
        }

        media = soma / comprimento

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${comprimento} números.</p>`
        res.innerHTML += `<p>O maior número foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números é ${media}</p>`
    }

} 