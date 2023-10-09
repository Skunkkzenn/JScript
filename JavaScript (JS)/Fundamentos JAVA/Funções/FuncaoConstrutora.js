function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado, que pertence apenas a funcao carro
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMax
        }
    }

    // método publico 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)