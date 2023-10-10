const notas = [6.7, 7.4, 8.3, 9.4, 7.6] 

// o for in não da as notas em si, da os índices de cada um dos elementos, como se fosse os atributos de um array

for (let i in notas) { // percorre pelos índices e não pelo valor
    console.log(i, notas[i]) // vai exibir o índice de cada nota e não o valor em si
} 

const pessoa = {
    nome: 'Idalsa',
    idade: 27,
    local: ('Marte com desvio em plutão')
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

