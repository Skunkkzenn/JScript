let num1 = 1
let num2 = 2

num1++ // postfixed, acrescenta 1 valor a unidade
console.log(num1)
--num1 // remove 1 valor da variável
console.log(num1)

console.log(++num1 === num2--) //só depois da comparação é que o valor é decrementado
console.log(num1 === num2) // como agora o num2 teve o valor decrementado, já teremos falso
