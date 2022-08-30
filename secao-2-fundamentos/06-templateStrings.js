const nome = "fulano";
const concatenacao = "olá " + nome + "!";
const template = `Olá ${nome}!`; // usar template Strings com abertura de cràse. permitido quebras de texto.

console.log(concatenacao, template);

console.log(`1+1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up(`cuidado`)}!`);