//usando o Destructuring dentro de uma função

//criamos a função de gerar um número randômico usando o destructuring com valores entre 0 e 600
function randomNumber({ min = 0, max = 600 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); //valor randomico ira multiplicar pelo valor máximo menos o mínimo e somando com o valor mínimo
}

const obj = { max: 50, min: 40 };
console.log(randomNumber(obj)); //criamos uma variável onde recebesse 2 valores e executasse a função

console.log(randomNumber({ min: 500 })); //chamamos a função e usamos um valor mínimo específico.

console.log(randomNumber({})); //chamamos a funçao com objeto vazio, para executar de forma normal.

console.log(randomNumber()); //aqui ocorrerá o erro pois está chamando a função e não está definido os valores.