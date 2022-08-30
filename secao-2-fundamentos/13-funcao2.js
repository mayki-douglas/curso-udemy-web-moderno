//armazenando uma função dentro de uma variável

const imprimirSoma = function(a, b){ //essa function ela se torna anônima. Em JS isso é possível e não é necessário inserir um nome para a mesma.
    console.log(a + b);
}

imprimirSoma(2, 3);

//armazenando uma função arrow em uma variável

const soma = (a, b) => { 
    return a + b;
}
//usando a seta (sinal de igual e maior), chamamos a função arrow e podemos deixar a sintaxe mais limpa, sem a necessidade de usar a palavra function.

console.log(soma(90, 80));

//função com retorno implícito.

const subtracao = (a, b) => a-b; 
console.log(subtracao(90, 80));

//deixando a sintaxe ainda mais limpa, podemos deixar a função arrow já com o retorno implícito, que no caso seria a subtração das duas variáveis A e B.

const imprimirTexto = a => console.log(a); //fazendo o uso da arrow function sem a necessidade de colocar a variável A dentro do parênteses, pois é somente 1 variável.
imprimirTexto("testando");