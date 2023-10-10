console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //Será estritamente igual? Não pq 1 é string e outro operador
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // apenas compara o endereço de memória
console.log('10)', d1 == d2) // apenas compara o endereço de memória

console.log('11)', d1.getTime() === d2.getTime()) // São o mesmo tipo numbers, são estritamente iguais
console.log('12)', undefined == null)
console.log('13)', undefined === null)