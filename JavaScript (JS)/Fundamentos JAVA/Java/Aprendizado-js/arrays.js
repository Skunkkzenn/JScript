const nome = ['Victor', 'Destefani', 'Maria Eduarda', 'Eliane']
console.log(nome[0], nome[3])
console.log(nome[0], nome[4]) //Como a posição 4 não existe, logo a impressão sera como indefinida

nome[4] = 'Lúcia' //Acrescentou o nome no índice 4
console.log(nome)
console.log(nome.length) //Verifica a quantidade dos elementos do array

nome.push({id:3}, false, null, true) //Adiciona elementos no array
console.log(nome)

console.log(nome.pop()) //Remove o último valor do array
delete nome[0] //Remove o primeiro elemento do array
console.log(nome)

console.log(typeof nome)


const valores = [9.8, 4.5, 6.8, 10]
console.log(valores[0], valores[3])