console.log(7 / 0); // Vai dar infinito, a linguagem JAVA retorna o tipo infinito
console.log("10" / 2); // Tipo string dividido por 2, funcionará normalmente
console.log("10.2" / 2); // O ponto funciona como a vírgula
console.log("Show!" * 2); // Não vai multiplicar a palavra, dará erro
console.log(0.1 + 0.7); // Não dará o resultado correto devido a ser o ponto flutuante e nao ter uma certa precisão, devido a regra do IEEE
// console.log(10.toString()) Não funcionará
console.log((10.345).toFixed(2)); // Desta forma funcionará corretamente
console.log('3' + 2); //O + no mundo da string faz sentido, pois concatena os elementos, resultado 32
console.log('3' - 2) //O - no mundo da string não funciona, ele vai tomar como o valor normal e executar a subtração