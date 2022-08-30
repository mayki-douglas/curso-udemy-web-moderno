let valor; //variável não inicializada e não atribuida, console retornará undefined.

console.log(valor);

//console.log(valor1); -> neste caso, o JS acusaria um erro, diferente de undefined
//diria que a variavel valor1 "NAO FOI DEFINIDA", ou "não declarada", diferente de undefined.

valor = null; //o null, significa a ausência de valor. Neste caso ele retornará o null, pois a variável já foi declarada acima.
console.log(valor);

//console.log(valor.toString()) -> Causará um erro do tipo TypeError, pois a propriedade toString não acessa um valor nulo.

//um objeto de nome produto, onde iremos chamar um atributo que não existe, que no caso seria preço.
const produto = {}
console.log(produto.preco); //nesta situação o console irá retornar um undefined, pois o objeto existe mas não tem atributo definido.
console.log(produto); //neste resultado, o console retornará o objeto vazio.

produto.preco = 600;
console.log(produto); //agora o console retornará o objeto com a atribuição de preço.

produto.preco = undefined; // evitar atribuir valores undefined nos objetos
console.log(!!produto.preco); //console retornará falso, convertendo o valor pra boolean.
delete produto.preco; //caso queira excluir um atributo de um objeto.
console.log(produto); //console retornando o valor undefined. Não recomendado.

produto.preco = null; // objeto produto sem preço.
console.log(!!produto.preco);
console.log(produto)