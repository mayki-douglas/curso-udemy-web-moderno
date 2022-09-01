//usando o Destructuring em arrays em funções com estrutura condicional.

function randomNumber([min = 0, max = 600]) { //mesma forma de escrita, mas usando colchetes.
    if (min > max) [min, max] = [max, min]; //lembrando, o destructuring esta sendo criado após o parenteses, e recebe um array novo, invertendo os valores.
    const valor = Math.random() * (max - min) + min; //valor randomico ira multiplicar pelo valor máximo menos o mínimo e somando com o valor mínimo
    return Math.floor(valor);
}

console.log(randomNumber([90, 10])); //função irá navegar entre os valores informados

console.log(randomNumber(([320]))); //usando apenas 1 elemento, até o valor máximo.

console.log(randomNumber([, 10])); //usando o segundo elemento, navegará entre o mínimo e o valor informado.

console.log(randomNumber([])); //objeto vazio, indo entre 0 e 600

console.log(randomNumber()); //mesmo erro do arquivo anterior.