//conceito de atribuições em Javascript

const a = 7; //o sinal de = é uma atribuição, que o A está recebendo o valor 7
let b = 4;

b += a; //essa atribuição é equivalente a: b = b + a.

console.log(b);

b -= 5; //atribuição equivalente a: b = b - 5.
console.log(b);

b *= 4; // b = b * 4.
console.log(b);

b /=3; // b = b / 3.
console.log(b);

b %= 4; // b = b % 4.
console.log(b);
//lembrando que o Javascript ta pegando o ultimo valor atribuido a B, e fazendo a operação antes do sinal de igual.