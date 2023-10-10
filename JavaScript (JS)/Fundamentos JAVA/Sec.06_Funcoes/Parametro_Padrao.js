
//Valor padrão serve para você utilizar em parâmetros de uma função, mas não se tiver criado dentro de uma função, caso queira assim, utilizar exemplo soma1

// Estratégia 1 para gerar valor padrão

function soma1 (a, b, c) { //Recebe o valor de a,b, c de uma função chamada soma
    a = a || 1 // 'a' recebe 'a' ou '1' V ou F
    b = b || 1 // 'b' recebe 'b' ou '1' V ou F
    c = c || 1 // 'c' recebe 'b' ou '1' V ou F

    return a + b + c

//Utilizando o operador 'ou' || Você consegue ter essa estratégia de trazer um valor padrão para uma variável que resolveu pra um valor falso
//Gerando efeitos colaterais    
}

console.log(soma1(), soma1(3), soma1(3, 2, 1), soma1(0, 0, 0))
// console.log(soma1()) // Como não foi passado valor nenhum, os 3 valores são undefined e então vai assumir o valor padrão que é 1
// console.log(soma1(3)) // Só foi passado o primeiro valor, ou seja, para o primeiro toma valor de 3 e para os demais assume o valor de 1
// console.log(soma1(3, 2, 1)) // Efetua a soma normalmente

// Ao passar os valores como 0, ele vai assumir como falso, nessa situação não seria bem empregado, no caso como seria falso o valor final seria 3
// console.log(soma1(0, 0, 0)) 

// Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    //condição ? valor_se_verdadeiro : valor_se_falso
    a = a !== undefined ? a : 1 // É verificado se o valor de a não é undefined. Se a não for undefined, a variável a mantém o seu valor atual. Caso contrário, se a for undefined, a variável a receberá o valor 1.
    b = 1 in arguments ? b : 1 // A condição verificada é se o índice 1 existe em arguments. Se o índice 1 existir em arguments, a variável b receberá o valor de arguments[1].  Caso contrário, ou seja, se o índice 1 não existir em arguments, a variável b receberá o valor 1 (valor padrão).
    
    //Essa versão abaixo é mais robusta, mais recomendável a utilizar para o cenário
    c = isNaN(c) ? 1 : c // É verificado se o valor de c não é um número (ou seja, se é NaN - Not a Number). Se c não for um número (NaN), a variável c receberá o valor 1. Caso contrário, se c for um número válido, a variável c manterá o seu valor atual.
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(3, 2, 1), soma2(0, 0, 0)) 
// console.log(soma2(3))
// console.log(soma2(3, 2, 1))
// console.log(soma2(0, 0, 0))


// valor padrao do es2015
function soma3 ( a = 1, b = 2, c = 3) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))