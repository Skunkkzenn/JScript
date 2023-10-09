function Pessoa(){
    this.idade = 0

    const self = this // Armazena o this na constante self, a constante não vai mudar nunca, permanecendo sempre o mesmo
    setInterval(function() { // Dispara outra função a partir do intervalo que você passou
        /*self*/this.idade++
        console.log(/*self*/this.idade) //Podemos substituir normalmente o this pelo self
    }/*.bind(this)*/, 1000) // Intervalo é passado em milisegundos, ou seja, a cada X milisegundos a função será processada  
}                           // Ao passar o bind ele vai amarrar o this do objeto, dentro da função pessoa

new Pessoa