Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim    // Se eu sou um number, eu vou acessar esse number a partir da variável 'this'
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('Foda pra karalhu')
    } else if(nota.entre(7, 8.99))  {
        console.log('Passou bem fdp')
    } else if(nota.entre(4, 6.99))  {
        console.log('Se fodeu, ta de recuperação')
    } else if(nota.entre(0, 3.99))  {
        console.log('Desiste do curso')
    } else {
        console.log('Nota Inválida')
    }
    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)