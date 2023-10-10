{{{{var sera = 'sera?'}}}}

console.log(sera)

function teste {
    var local = 123 //quando se define uma variável dentro de uma função, o escopo dessa função só pertence a ela, não deixando ser chamada do lado de fora da função
    console.log(local) 
}

teste()
console.log(local)

//Evitar criar variáveis que vão para o escopo global