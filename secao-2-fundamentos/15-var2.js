var numero = 1;

{
    var numero = 2;
    console.log("Número dentro do bloco:", numero);
}
console.log("Número fora do bloco:", numero);

// nesse bloco de código, o Var NÃO da prioridade a variável que esta dentro de um bloco, mesmo sendo do mesmo nome, sendo assim, ambas sendo variáveis globais.
// o console irá sobrescrever as duas variáveis.
// o Javascript so irá mudar se a variável estiver associada a uma função.