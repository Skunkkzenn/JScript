function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do { // Faz a validação pelo menos uma vez, sem precisar verificar, só validando no final do bloco
    opcao = getInteiroAleatorioEntre(-1, 10) // Vai gerar um valor aleatório entre -1 e 10
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima!')