/* É o contexto no qual as coisas foram declaradas dentro da linguagem, não faz apenas diferença com o arrow function, também quando estamos trabalhando com funções */

const valor = 'Global'

//contexto lexico no qual essa função foi declarada: foi dentro do módulo do node, dentro do arquivo contextolexico.js

function minhaFuncao() {
    //como não temos nenhuma variável com este mesmo nome, vai ser procurado a variável no scopo maior
    console.log(valor)
}
/* 

Se tentarmos executar, qual variável será aplicada? 
Por conta do contexto léxico, contexto no qual a função foi escrita, a função vai encontrar no caso o valor = Global, porque, quando uma função é declarada em js, ela não tem apenas, o conteúdo interno, parâmetros recebidos ou 
o que ela retorna, ela também tem consciência do local que ela foi definida. Carregando consigo a informação do contexto no qual ela foi declarada/escrita, ela vai sempre procurar dentro do scopo lexico onde ela foi definida
se não encontrou o local, vai procurar no escopo mais abrangente, não no local de execução, como abaixo, mas sim onde ela foi definida, no exemplo em cima. */

function exec() {
    const valor = 'local'
    minhafuncao()
}

exec()