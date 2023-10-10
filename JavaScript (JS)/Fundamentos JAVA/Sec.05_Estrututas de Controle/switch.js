const imprimirResultado = function (nota) { // Uma constante com nome de imprimir resultado, que recebe uma função, que por sua vez recebe uma nota
    switch (Math.floor(nota)){ // Arredondar para baixo 'Math.floor'
        case 10:
            case 9:
        console.log('Quadro de honra')
        break //só irá sair do case quando encontrar o 'break'

        case 8: case 7:
            console.log('Aprovado')
            break
        
        case 6: case 5: case 4:
            console.log('Recuperação')
            break

        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
        }

}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(11)
imprimirResultado(-1)

