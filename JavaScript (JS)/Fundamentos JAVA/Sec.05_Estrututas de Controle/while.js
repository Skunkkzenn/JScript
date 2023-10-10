//Quando temos uma quantidade inderteminada de repetições

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Multiplica-se pelo intervalo para assim o valor ficar dentro desse range 
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // Enquanto for diferente de -1 vai executar o bloco, quando for -1, sairá do laço
    opcao = getInteiroAleatorioEntre(-1, 10) // Vai gerar um valor aleatório entre -1 e 10
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')