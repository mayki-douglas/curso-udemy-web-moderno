let isAtivo = false; //usar let para variáveis, recebeu um valor na linha 1 e na linha 5 foi mudado esse valor.

console.log(isAtivo);

isAtivo = true;

isAtivo = 1;
console.log(!isAtivo); //usando o sinal de exclamação, torna-se sinal de negação.
console.log(!true); //verdadeiro se torna falso
console.log(!false); //falso se torna verdadeiro

//exemplos de negação usando 2 sinais de exclamação
console.log(!!true);
console.log(!!false);

//situações que sempre retornará true
console.log("Valores Verdadeiros");
console.log(!!3);
console.log(!!-1); //numeros inteiros, menos o 0
console.log(!!'teste'); //uma string
console.log(!![]); //um array retornando true
console.log(!!{}); //um objeto retornando true
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Valores falsos")

console.log(!!0); // zero sempre será falso
console.log(!!''); //strings vazias
console.log(!!null); //valores nulos
console.log(!!NaN); //valores "Not a Number"
console.log(!!undefined); //undefined
console.log(!!(isAtivo = false)); //usando uma atribuição, vindo ao lado direito que retorne o valor

console.log("Expressão lógica");

console.log(!!('' || 0 || null || ' ')); //usando uma expressão lógica que ele retorne 1 valor verdadeiro apenas usando a expressão OU (||)

//usando uma variável como exemplo

let nome = '';

console.log(nome || 'teste');

//neste exemplo acima, o JS entende que, como a variavel nome é uma string vazia, ele terá um valor falso, e o console irá imprimir o valor 'teste' pois é o único valor verdadeiro.