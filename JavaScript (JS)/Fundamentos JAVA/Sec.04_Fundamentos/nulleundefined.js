const a = {nome: 'teste'}

const b = a //recebe o endereço que o 'a' aponta na memória, ao ser alterado o valor de b

b.name = 'opa'// logo será alterado o valor de a, pois ambos tem o mesmo endereço de memória

let c = 3
let d = c // Quando trabalhamos com tipos primitivos, fazemos a cópia pelo valor da variável, 
                //é diferente de quando estamos a passar objetos, arrays e strings, pois a passagem é feito pela referência, endereço de memória
d++;

console.log(c, d)




let valor //não incializada, valor terá como undefined pois não tem nada atribuído a ela
console.log(valor)

valor = null // não tem nenhum valor dentro dela (vazio)
console.log(valor)

//console.log(valor.toString()) //Erro!! O valor que vem antes é nulo, logo não é possível acessar nada

const produto = {}
console.log(produto.preco) //preço não existe no produto, logo será undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //Convertido para bolean, falso
// delete produto.preco // remover atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)