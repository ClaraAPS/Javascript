function parimpar(n) {
    if(n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

console.log(parimpar(4))

function soma(n1, n2){
    return n1+n2
}

console.log(soma(2, 7))

let v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    let fat = 1 
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//RECURSIVIDADE -> chamar a propria função dentro dela

function factorial(x) {
    if (x == 1) {
        return 1
    } else {
        return x * factorial(x-1)
    }
}

console.log(factorial(5))