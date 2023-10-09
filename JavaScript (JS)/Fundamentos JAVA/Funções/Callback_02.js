const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


//Sem Callback
const notasBaixas = []
for (let i in notas){
    if(notas[i] < 7)
    {
        notasBaixas.push(notas[i]) //Função push, adiciona elementos no array
    }
}

console.log(notasBaixas)

//Com call back
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
}) //Vai filtrar os elementos do array, em cima de determinado critério, que vai retornar true ou false, se retornar true, o elemento deve ser adicionado no array, se false o elemento nao é adicionado
console.log(notasBaixas2)


//Arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Ou
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)