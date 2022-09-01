//objetos resumidamente são pares de nome e valor.

const saudacao = 'eai';

function exec(){
    const saudacao = 'salve';
    return saudacao; //por estarem em contextos diferentes, não haverá conflito entre as duas variáveis.
}

const cliente = {
    nome: "Mayki",
    idade: 27,
    peso: 60,
    endereco: {
        logradouro: "rua tal",
        numero: 91
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

//os resultados serão exibidos normalmente, mas em contextos diferentes
//JavaScript pode criar objetos dentro de outros objetos com blocos diferentes
//só haverá conflito entre as duas variáveis se elas forem com o mesmo nome em um mesmo contexto.