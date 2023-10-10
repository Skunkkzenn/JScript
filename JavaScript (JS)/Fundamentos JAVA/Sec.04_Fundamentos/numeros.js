const peso1 = 1.0; // Forma padrão 
const peso2 = Number('2.1'); // Outra forma

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verifica se o número é inteiro; True
console.log(Number.isInteger(peso2)) // Verifica se o número é inteiro; False


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Escontrar média
const media = total / (peso1 + peso2); // media

console.log(media.toFixed(2)); // toFixed(2) Fixa o número de casas decimais em 2;
console.log(media.toString(2)) // Converte o valor em uma string, converte em binário
console.log(typeof media); // Tipo de dados 
console.log(typeof Number); // Tipo de dados