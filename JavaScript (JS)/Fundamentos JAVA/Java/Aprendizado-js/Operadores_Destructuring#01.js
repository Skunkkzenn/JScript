// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua costinha',
        numero: 8
    }
}

// as chaves representam o operador destructuring
const { nome, idade } = pessoa // Tire de dentro do objeto (pessoa) nome e idade
console.log(nome, idade)

const {nome: n, idade: i } = pessoa // Tire de dentro do objeto (pessoa) nome e idade criando novos nomes para essas variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // de forma padrao se nao tiver nada em bemhumorada dentro do objeto assume o valor de true
console.log(sobrenome, bemHumorada) // se não existir a variável vai retornar undefined 

const { endereco: { logradouro, numero, cep } } = pessoa // Acesso ao endereço.
console.log(logradouro, numero, cep)