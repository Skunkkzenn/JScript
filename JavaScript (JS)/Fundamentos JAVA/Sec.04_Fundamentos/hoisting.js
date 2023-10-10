//Variavel declarada com var sofre o içamento, logo a primeira dara undefined e a segunda funcionará normalmente
console.log('a =', a) 
var a = 2
console.log('a =', a)

//O efeito de içamento quando se definido com let não é o mesmo, dará erro
console.log('a =', a) 
let a = 2
console.log('a =', a)

