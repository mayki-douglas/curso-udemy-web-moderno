//diferença de definição de variaveis com a palavra reservada LET
let numero = 1;
{
    let numero = 2;
    console.log("Número dentro do bloco:", numero);
}
console.log("Numero fora do bloco:", numero);

//a diferença de VAR e LET, é que o LET possui o escopo global, de função e de bloco.
//o console irá diferenciar as duas variáveis nesse sentido, por uma estar dentro de um bloco, mesmo tendo o mesmo nome.