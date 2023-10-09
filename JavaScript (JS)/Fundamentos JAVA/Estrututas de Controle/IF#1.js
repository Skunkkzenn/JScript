function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Passou de Ano ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // Passa como undefined, que é tratado como false
seForVerdadeEuFalo(null) // Passa como falso
seForVerdadeEuFalo(undefined) // Passa como falso 
seForVerdadeEuFalo(NaN) // Not a number, também é falso
seForVerdadeEuFalo('') // String vazia também será falso
seForVerdadeEuFalo(0) // Único nº que é falso
seForVerdadeEuFalo(-1) // Será verdadeiro
seForVerdadeEuFalo(' ') // Verdadeira, pois contem um espaço
seForVerdadeEuFalo('?') // Verdadeiro
seForVerdadeEuFalo([]) // Array vazio também será verdade
seForVerdadeEuFalo([1, 2]) // Array composto também será verdade
seForVerdadeEuFalo({}) // Objeto vazio, será verdade
