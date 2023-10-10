//Mesmo antes de termos a função declarada, podemos chamar a função
console.log(soma(3, 4))
console.log(sub(4, 4)) // Neste método já não irá funcionar chamando antes
console.log(mult(4, 4)) // Neste método já não irá funcionar chamando antes

//function declaration  - forma tradicional - o interpretador do JS carrega toda a informação referente a function antes de inicializar, somente quando temos a function
function soma(x, y){
    return x + y    
}

//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}