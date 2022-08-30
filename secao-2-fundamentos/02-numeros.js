const peso1 = 1.0;
const peso2 = Number("2.2");

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.331;
const avaliacao2 = 6.654;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed após a media, para restringir as casas decimais.
console.log(media.toString(2)); // transformado em binário no método toString.
console.log(typeof media); // tipo de dado.
console.log(typeof Number); //Number com N maiúsculo é considerado função.