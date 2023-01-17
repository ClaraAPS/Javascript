//var hora = 19

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora > 7 && hora < 8 ){
    console.log(`Você está atrasado, já passou das 7h`)
} else if (hora == 7){
    console.log(`Já são ${hora} horas, hora de levantar!`)
} else if (hora > 5 && hora < 12){
    console.log (`Bom dia!`)
} else if (hora < 18){
    console.log('Boa tade!')
} else if (hora >= 18){
    console.log('Boa noite')
}