//objetos em JS
//objetos em javascript é uma coleção de chaves + valores.
//lembrando que objetos em JS não são a mesma coisa que JSON. 
//JSON = JavaScript Object Notation = forma textual de objetos.

const produto1 = {} //lembrando que o par de chaves é a forma literal de um objeto.

produto1.nome = "Mouse Logitech G502"; //usamos nomes genéricos para identificar que o objeto possui um nome e valor.
produto1.preco = "399.00";
produto1['Desconto pq ta velho'] = 0.50; //desta forma o valor funciona mas não é o recomendado, pois o nome do atributo esta com espaços.

console.log(produto1); //console irá retornar os valores citados acima.

//no caso de produto 2, o objeto pode ser criado desta maneira, sendo mais dinâmica e identada.
const produto2 = {
    nome: "EVGA Geforce GTX 1660ti",
    preco: 1699.00
}
//lembrando que os atributos tem que ser únicos.
console.log(produto2);

const produto3 = {
    nome: "AMD Ryzen 5 3600",
    preco: 1499.00,
    obj: {
        Marca: "AMD",
        obj: {
            Linha: "Ryzen"
        } //neste caso, os objetos podem ser inseridos dentro de outros objetos.
    }
}

console.log(produto3);

//o que diferencia o objeto e o JSON?   

"{'nome': 'AMD RYZEN 5 3600', 'preco': 1499 }" //este formato é válido como JSON, transformado tudo em String.