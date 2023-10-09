//Utilizando arrays com destructuring

function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //inverte as duas variaveis, se o min for > max
                                    //Aqui criamos um novo array    
                    //aqui temos a desestruturas, os dois atributos retirados da função
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor) // arredonda para baixo
}

console.log(rand([50, 40])) //toma 50 como max e 40 como min
console.log(rand([992])) // toma 922 com min
console.log(rand([ , 5])) //min 0 max 5
console.log(rand([])) // toma os valores padroes como base
console.log(rand()) // Vai tentar desestruturar elementos de algo que é nulo ou undefiened