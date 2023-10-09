// Função Normal
let dobro = function(a) { 
    return 2 * a
}

//Função Arrow
dobro = (a) => { 
    return 2 * a
}

//Tendo apenas um único parâmetro, pode-se escrever:
dobro = a => 2 * a //Ao tirar os {} que são o corpo da função, teremos um returno implícito

console.log(dobro(Math.PI))



let ola = function () {
    return 'Olá'
}

//Ao criar uma função arrow, se colocarmos o bloco {}, o return deve ser acrescentado, para que o comando possa retornar
ola = () => 'Olá' 
ola = _ => 'Olá' //Possuí apenas um parâmetro
console.log(ola())

