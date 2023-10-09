// É preciso muito cuidado ao manipular o this e atribuir determinado atributo dentro deo escopo de uma função, pois estaremos mexendo no escopo global
let comparacomthis = function (param) {
    console.log(this === param)
}

comparacomthis(global)


const obj = {}
comparacomthis = comparacomthis.bind(obj) 
comparacomthis(global)//Vai dar falso, pois já não aponta para o global
comparacomthis(obj) // O this agora dentro da função, aponta para o obj por conta do bind


//Será que o this, ele vai continuar apontando para o global, como uma função normal apontaria? Não!
let comparacomthisarrow = param => console.log(this === param) // Pq essa função, foi definida dentro de outro módulo do node, um outro "arquivo", ou seja,
                                                        // Dentro do contexto léxico, ele apenas irá funcionar dentro desse módulo, o 'this' dessa função, será o próprio this
comparacomthisarrow(global)          
comparacomthisarrow(module.exports)                                              

//Utilizar o bind numa função arrow, a ver se será possível alterar o this
comparacomthisarrow = comparacomthisarrow.bind(obj) 
comparacomthisarrow(obj) // Não vai apontar para o obj, pois a arrow function nao muda, mantém a guarda firme, o this aponta para o obj no qual a função foi escrita
comparacomthisarrow(module.exports)

// O this numa função arrow, não vai variar de forma alguma,pois o this está associado ao contexto no qual a função foi escrita. Não existirá variação, mesmo utilizando o bind.
