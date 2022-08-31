//usando a palavra reservada VAR num laço de repetição (for)

for (var i = 0; i < 10; i++){ //estrutura básica do for (declarando a variavel, até onde ela vai se repetir, se ela vai ser incrementada)
    console.log(i);
}

console.log("i:", i); 
//como a variável i foi definida como VAR, e VAR não possui escopo de bloco, ele irá retornar no console o número que parou no laço.
//como o laço vai até 9, a linha 7 irá imprimir o valor de 10.
