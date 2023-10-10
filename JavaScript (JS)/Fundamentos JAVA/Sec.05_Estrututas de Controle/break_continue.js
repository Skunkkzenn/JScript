const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){ // o x é o índice do array 
    if (x == 5) { 
        break // break causa o desvio de fluxo para fora do laço corrente
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) { continue } // interrompe a execução , passando para a próxima execução
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo //somente o break, utilizará o rótulo mais interno, acrescentando o 'break externo' ficará disponível para todo o bloco
        console.log(`Par = ${a}, ${b}`)
    }
}

