const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna a 4º letra da palavra
console.log(escola.charAt(5)) //Se tentar imprimir um caracter que nao existe, impreme vazio
console.log(escola.charCodeAt(3)) //Retorna valor/COD do caracter pertecente a tabela unicode
console.log(escola.indexOf('C')) //Retorna o indice/posição que o caracter está dentro da palavra
console.log(escola.substring(1)) //Escreve a palavra a partir do ponto determinado até o final
console.log(escola.substring(0, 3)) //Escreve a palavra a partir do ponto de inicio determinado até o fim determinado

console.log('Escola'.concat(escola).concat("!")) //Concatena palavra junto da constante criada
console.log('Escola' + escola + 'Bouaaa') //Ou pode-se concatenar utilizando um +

console.log(escola.replace('C', 'e')); //Substitui o caracter
console.log(escola.replace(/\d/, 'e')); // Substitui todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')); // Substitui todos as letras pela letra 'e'
console.log('Victor,Vinicius,Carmem'.split(',')) //Converte string em array, definindo o que você quer utilizar como separador, dentro do split