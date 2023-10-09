const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // Aqui vai estar acessando o objeto no qual é o dono dessa função, o objeto 'pessoa'
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e Orientada a Objetos



//utilizando o bind - passamos o bind para o objeto no qual queiramos que seja resolvido o this
//O bind é um método responsável por amarrar um determinado objeto, para ele ser o dono da execução naquele método, sempre que o método for chamado
//Sempre que você referencias o This, o this será o objeto que você passou para a função bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()