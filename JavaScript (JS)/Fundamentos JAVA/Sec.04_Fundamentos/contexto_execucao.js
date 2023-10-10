let a = 3
console.log(this.a) // não vai encontrar 
console.log(global.a) // não vai encontrar, o global dentro do node funciona como o window


//Só funcionando da seguinte forma
console.log(a)

global.b = 123
console.log(global.b)

this.c = 456

// O this é exatamente igual ao module exports
console.log(this.c)
console.log(module.exports.c) 
console.log(module.exports === this)
