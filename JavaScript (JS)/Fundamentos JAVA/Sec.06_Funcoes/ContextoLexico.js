/* � o contexto no qual as coisas foram declaradas dentro da linguagem, n�o faz apenas diferen�a com o arrow function, tamb�m quando estamos trabalhando com fun��es */

const valor = 'Global'

//contexto lexico no qual essa fun��o foi declarada: foi dentro do m�dulo do node, dentro do arquivo contextolexico.js

function minhaFuncao() {
    //como n�o temos nenhuma vari�vel com este mesmo nome, vai ser procurado a vari�vel no scopo maior
    console.log(valor)
}
/* 

Se tentarmos executar, qual vari�vel ser� aplicada? 
Por conta do contexto l�xico, contexto no qual a fun��o foi escrita, a fun��o vai encontrar no caso o valor = Global, porque, quando uma fun��o � declarada em js, ela n�o tem apenas, o conte�do interno, par�metros recebidos ou 
o que ela retorna, ela tamb�m tem consci�ncia do local que ela foi definida. Carregando consigo a informa��o do contexto no qual ela foi declarada/escrita, ela vai sempre procurar dentro do scopo lexico onde ela foi definida
se n�o encontrou o local, vai procurar no escopo mais abrangente, n�o no local de execu��o, como abaixo, mas sim onde ela foi definida, no exemplo em cima. */

function exec() {
    const valor = 'local'
    minhafuncao()
}

exec()