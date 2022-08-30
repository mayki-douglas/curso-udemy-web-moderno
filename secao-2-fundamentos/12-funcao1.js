//criando uma função sem retorno

function imprimirSoma(a, b) { //usamos 2 variáveis como parâmetros 
    console.log(a + b); //console irá imprimir a soma das duas variáveis
}

imprimirSoma(2, 3); //chamamos a função e inserimos os valores nas variáveis.
imprimirSoma(4); //neste caso, um valor sendo passado, o console retornará Not a Number, pois é a soma de um valor, mais um valor "undefined" .
imprimirSoma(2, 10, 6, 5, 4, 300); //com mais valores inseridos nos parâmetros, o JS irá ignorar o restante e somar apenas os 2 primeiros.
imprimirSoma("t", "o"); //em duas strings, o javascript irá concatenar os elementos.
imprimirSoma(); //mais um caso de Not a Number.

//criando uma função com retorno

function soma(a, b = 1){ //tratamos a variável B para receber o valor 1
    return a + b; //retornando a soma das variáveis
}

console.log(soma(3, 5)); //usando o console para chamar a funçao com retorno e inserindo os valores dentro dela
console.log(soma(6)); //neste caso, a função pegará o valor 6 e somará com o valor 1 que está atribuido no B.
console.log(soma()); //nessa situação retornará um NaN pois, o parâmetro será somado entre o 1 e o A.

