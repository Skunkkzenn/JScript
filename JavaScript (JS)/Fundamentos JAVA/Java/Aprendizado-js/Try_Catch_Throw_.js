 function tratarErroeLancar(erro) {
    //Lança a mensagem de error que queremos expor 
    //throw new Error('...') 
    //throw 10 
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
 }
 
 function imprimirNomeGritado(obj){
   try { // Bloco de código que capta os erros de acordo com o bloco de código que está dentro dele
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // O erro passa para cá para ser tratado
        tratarErroeLancar(e)
    } finally { //Bloco será executado mesmo se ocorra erro ou não
        console.log('final')
    }
 }
 const obj = { nome: 'Rodrigo', }
 imprimirNomeGritado(obj)