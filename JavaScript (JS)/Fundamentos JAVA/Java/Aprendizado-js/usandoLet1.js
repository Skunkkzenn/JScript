var numero = 1
{
    let numero = 2                   // let tem scopo de bloco, estará visivel apenas dentro do bloco, o var acaba por ter o escopo mais global e let mais particular
    console.log('dentro =', numero)
}

console.log('fora =', numero)