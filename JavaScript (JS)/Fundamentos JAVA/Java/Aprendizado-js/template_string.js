const nome = 'Rebeca'
const concatencao = 'Olá' + 'Victor' + '!'

const template = `
Olá
${nome}!` // Executa a concatenação, funciona como um interpolador (interpretador) de uma melhor forma, aceitando as quebras de linhas!!
console.log(concatencao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) // Mesma situação, só executa a soma pois estamos a interpolar em ${1 + 1} 

const up = texto => texto.toUpperCase() // Cria uma variável 'up' para alocar uma string, que utiliza a função 'toUpperCase' para deixar tudo maiúsuculo
console.log(`Ei...${up('cuidado')}!`) // É passada a variável 'up' dentro do método para assim indicar que a palavra 'cuidado' deve sair maiúscula