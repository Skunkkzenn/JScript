var a = 3; // A toma valor de 3
let b = 4; // B toma valor de 4 

//Regra geral: criar variavel utilizando let

//utilizando o var, pode-se redeclarar uma variável dentro do mesmo scopo de cód
var a = 30;
b = 70;

console.log(a, b);

a = 200;
b = 300;

console.log(a, b);

const c = 5;
// c = 50; -> em uma constante não é possível alterar o valor da variável no decorrer do processo
console.log(c);