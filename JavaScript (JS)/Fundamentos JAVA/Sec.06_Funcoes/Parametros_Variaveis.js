function soma() {
    let soma = 0
    for (i in arguments) { // indice argumentes, arguments é um array, assim conseguimos acessar o indice de cada um dos elementos e podemos trabalhar em cima dele
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3))
console.log(soma(1, 2, 3, "Teste")) // Vai concatenar a frase juntamente do resultado da soma
console.log(soma('a', 'b', 'c')) // Íra concatenar todas as strings, mas como já iniciou a variavel soma como 0, também estará no resultado final
