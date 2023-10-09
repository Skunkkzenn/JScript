let contador = 1

while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <=10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 8.3, 9.4, 7.6]

for (let i = 0; i< notas.length; i++) { // O parâmetro length verifica o tamanho do array, assim tornando possível a 
                                    // navegação por todo o tamanho do array, até chegar no final
    console.log(`notas = ${notas[i]}`)
}
