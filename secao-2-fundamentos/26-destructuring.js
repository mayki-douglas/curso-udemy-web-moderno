//entendendo o destructuring
//conceito de desestruturação de um objeto em si.

const pessoa = {
    nome: "Mayki",
    idade: 27,
    peso: 60,
    endereco: {
        logradouro: "Rua tal",
        numero: 999
    }
}

const { nome, idade } = pessoa; //essa é a estrutura do Destructuring, pegando os 2 atributos de pessoa
console.log(nome, idade); //o console irá imprimir os valores de pessoa.

const { nome: n, idade: i} = pessoa; //criando variáveis para os atributos o JS irá entender da mesma forma.
console.log(n, i);

const { sobreNome, faixaSalarial = true } = pessoa; //com atributos que não existem, e mesmo um deles recebendo um valor padrão true
console.log(sobreNome, faixaSalarial); // o console irá imprimir o valor undefined e true.

const { endereco: { logradouro, numero, cep }} = pessoa; //esta forma está chamando o atributo endereço, mesmo dentro de um bloco.
console.log(logradouro, numero, cep);

//sempre desestruturar um dado que exista, pois, usando um atributo que não exista dentro de objeto, acusará um erro.