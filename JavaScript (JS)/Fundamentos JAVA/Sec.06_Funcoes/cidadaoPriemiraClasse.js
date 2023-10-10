//Funcao em JS é First-Class Object (Citizens)
//Higher-order function

// O retorno em uma função JS é opcional, caso não retornemos nada, a função retorna como undefined


//Criar de forma literal
function fun1() {}  //Aqui recebe os parâmetros

//Armazenar em uma variavel
const fun2 = function () {} // uma função anónima que está associada a uma variável fun2

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2] //Tanto podemos armazenar uma função de forma literal quanto de uma alocada a uma variável
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun3){
    fun3( )
}

run(function () {console.log('Executando...')}) //Só irá funcionar quando a mesma for invocada dentro da função master, ou seja, 
                                                // se o fun3() estiver a ser chamado dentro da função
                                            

//Uma função pode retornar/conter uma função
function soma (a, b) { // Função chamada soma, recebe 2 parâmetros A e B
    return function (c) // Retorna uma terceira função que recebe outro parâmetro C
    {
        console.log(a + b + c) //O que será exibido
    }
}
soma(4, 5)(7) // Fazemos assim de uma forma trática 
               
                // OU

const cincoMais = soma(2, 3) // Armazena a função numa variável
cincoMais(4) // Chama a função com a variável