//Quando trabalhamos com funções normais, nós nomeamos elas, já com a anonima, nos podemos passar ela para ser executada dentro de outra função
//Ou pode armazenar uma funcao anonima dentro de uma variavel

//Exemplos

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // Por padrão, se não, denominar a SOMA... ela vai puxar a info de cima, ou seja, 
                                                            // Como não passamos o parâmetro para soma, ela vai puxar a operação que está dentro da função
    console.log(operacao(a, b))
}


imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

//Aqui acabamos de passar um função anônima pra outra função
imprimirResultado(3, 4, function(x, y){
    return x - y
})

//Passando uma função arrow, sempre teremos, de facto, uma função anônima
imprimirResultado(3, 4, (x, y) => x * y)

//função anónima, dentro do contexto obj
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()