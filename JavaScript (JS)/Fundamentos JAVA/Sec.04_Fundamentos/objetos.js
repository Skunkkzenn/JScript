// Objeto é um grupo de pares de {} e valor

//Notação literal de criação de objetos
const prod1 = {} // {} o par de chaves significa que está a passar um objeto, podemos criar um objeto e definir como ele será
                  // quais serão os atributos que ele irá tomar, o seu comportamento

prod1.nome = 'Motorola G73' //prod1 cria dinamicamente a variável nome para alocar a string (ou qualquer outro valor)
prod1.preco = 4999.99
prod1.stock = 10
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log({prod1})

const prod2 = {
    nome: 'Alcatel',
    preco: 19.99,
    lancamento: 2019 
}

console.log(prod2)

//Se fosse json, teria sempre aspas duplas na sua criação, formato textual de criação 
const prod3 = {"nome": "Victor", "preço": 79.90}
console.log(prod3)