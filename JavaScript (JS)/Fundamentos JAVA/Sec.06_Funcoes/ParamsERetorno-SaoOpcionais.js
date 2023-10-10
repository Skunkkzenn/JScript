function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(3, 4, 5, 6, 9, 18)) // Somente vai utilizar os números que entrem dentro do parâmetro, ou seja, só usa os 2 primeiros
console.log(area(5, 5))