              //Passa dois atributos dentro de um operador destructuring
function rand( {min = 0, max = 10000}) { //Retorna numero aleatorio, no caso temos o min e o max e o numero gerado será entre eles
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

                 //Aqui já estamos a utilizar objetos
console.log(rand({ min: 40, max: 50 }))

//ou podemos criar o objeto e chamo-lo na função

const obj1 = { min: 40, max: 50 }
console.log(rand(obj1))

//ou apenas chamar o minimo ou o máximo
console.log(rand({min:9998}))

//Irá gerar um número randômico entre 0 e 10000
console.log(rand({}))

//Sem passar objeto nenhum, teremos undefined/vazio
console.log(rand())