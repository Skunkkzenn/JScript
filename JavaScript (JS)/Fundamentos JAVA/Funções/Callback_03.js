//Exemplo de callback no browser
//document é referência dentro do browser, disponível globalmente, que aponta para a página o 'DON'
document.getElementsByTagName('body')[0].onclick = function(e){ //getElementsByTagName -> acessa os elementos a partir de uma tag e passamos o indice do elemento, para termos acesso especificamente a esse elemento, precisamos acrescentar o indice para termos acesso ao elemento
    console.log('O evento ocorreu!')
} 

//vamos atribuir uma callback ao onclick, para que seja chamado sempre que o usuário clicar no body
