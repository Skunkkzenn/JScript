/* !! LEMBRAR DA DUPLA NEGAÇÃO !! */

let isAtivo = false //não esquecer que, usamos let, quando queremos alterar futuramente o valor da variável
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Utiliza-se '!!' para confirmar se o valor é verdadeiro ou falso

isAtivo = 0
console.log(!!isAtivo) //O mesmo exemplo para confirmar que 0 é falso

/*

isAtivo = 1
console.log(!isAtivo) //Somente uma negação, o 1 passa a ser 0

isAtivo = 0
console.log(!isAtivo) //Somente uma negação, o 0 passa a ser 1

isAtivo = 0
console.log(!true) // Segue-se a mesma lógica

isAtivo = 1
console.log(!false) // Segue-se a mesma lógica

*/


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Basta espaço em branco que valida
console.log(!!'teste')//Ou mesmo com conteúdo valida como verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity) //tipo infinito
console.log(!!(isAtivo = true)) //situação de atribuição, valor atribuido a variavel, se for resolvido para verdadeiro, dará verdadeiro

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // Teste se o nome esta preenchido ou não, se estiver preenchido é verdadeiro, mesmo que seja só um espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Assume o valor atribuídoa variável

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) //pelo menos um precisa ser verdadeiro, mostra que todos os outros são falsos
console.log(('' || null || 0 || '' || 123)) //a mesma lógica, mas apenas mostra o verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')
