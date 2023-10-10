//Função sem retorno, a função contém váriaveis e blocos de código

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Como não existe segundo parâmetro, será undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9) //Soma os 2 primeiros ignorando todo o resto
imprimirSoma() //Not a number, como está vazio, avisa que não é um número

//função com retorno
function soma(a, b = 0){
    return a+b;
}

console.log(soma(2, 5))
console.log(soma(2))
console.log(soma())