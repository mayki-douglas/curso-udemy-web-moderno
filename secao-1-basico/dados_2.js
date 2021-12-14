let preco = 19.90;
let desconto = 0.4; // let é a mesma coisa que variável (var)

let precoComDesconto = preco * (1 - desconto);
console.log(19.9 * 0.6);
console.log(precoComDesconto);

// concatenação igual em Java puro

var nome = "Caderno";
var categoria = "Papelaria";
console.log("Produto: " + nome, "\n"
    + "Categoria: " + categoria, "\n"
    + "Preço: " + preco, "\n"
    + "Desconto: " + desconto);