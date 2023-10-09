function teste1(num){
    if (num > 7)
    console.log(num)

  console.log('Final') // Essa sentença sempre será executada, pois não tem nenhuma associação com o bloco if
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7) ; // cuidado com o ';' não usar com estruturas de controle

    {
        console.log(num);
    }
}

teste2(6)
teste2(8)