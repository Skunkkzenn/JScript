 /*
 
 v e f -> f
 f e ? -> f
 v e v -> v

 v ou ? -> v
 f ou v -> v
 f ou f -> f

 v xor v -> f //OU EXCLUSIVO, para ser verdadeiro os dois devem ser distintos, se forem iguais é falso
 v xor f -> v
 f xor v -> v
 f xor f -> f

!v = f
!f = v

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // xor também pode ser simulado por !=
    const manterSaudavel = !comprarSorvete // operador unário
    
            // Para retornar todos, criamos um objeto
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))