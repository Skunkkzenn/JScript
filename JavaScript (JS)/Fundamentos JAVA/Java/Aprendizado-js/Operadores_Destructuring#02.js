 const [a] = [10]
 console.log(a)

 const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Utilizar multiplos elementos de um array, extrair/desestruturar e 
                                                // atribui a varias variáveis utilizando apenas uma unica atribuição
 console.log(n1,n3,n5,n6)

 const [, [, nota, bosta]] = [[, 8, 8], [9, 6, 8]] //Preste atenção no modo como os arrays estão escritos
 console.log(nota, bosta)