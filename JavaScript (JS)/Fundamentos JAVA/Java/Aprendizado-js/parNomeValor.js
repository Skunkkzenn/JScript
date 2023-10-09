//par nome/valor

const saudacao = 'Ola' //contexto léxico 1 (local fisico de onde está a ser definido)

function exec() {
const saudacao = 'Fala' //contexto léxico 2
return saudacao; //Se não for encontrado dentro do bloco, ele vai buscar o valor fora
}

//Objeto são grupos aninhados de pares nome/valor

const cliente = {
    nome:'Victor',
    nif: 213664898,
    peso: 90,
    Morada: {
        logradouro: 'Carlos Enriquepédia', numero: '4' //Poderíamos ter os mesmos nomes criados dentro da const, pois os mesmo estão a ser criados em contextos diferentes;
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)