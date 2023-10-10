// Ver vídeo callback padrão de projeto

const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

//Passa uma func para outra func, quando determinado evento acontecer, essa funcao vai ser chamada de volta, pode ser chamada uma unica vez, ou várias, dependendo do contexto

//ForEach é uma função de fabricantes, dentro do array temos a funcao foreach, para cada elemento do array, chama-se a função imprimir, foreach vai passar como parâmetro pra essa função, o nome do elemento e também o seu índice

fabricante.forEach(imprimir)

fabricante.forEach(function(a){
    console.log(a)
})

fabricante.forEach(a =>   console.log(a)) //Função Arrow


//Para cada elemento do array, ele vai chamar de volta essa função, retornando em ordem crescente o resultado