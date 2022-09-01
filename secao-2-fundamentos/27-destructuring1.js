const [a] = [10];
console.log(a);

//usando Destructuring em arrays funcionam da mesma forma, mas deve-se usar colchetes.

const [n1, , n3, , n5, n6 = 0] = [90, 34, 5, 88];
console.log(n1, n3, n5, n6); //neste caso ele acusará o n5 como undefined.

//neste exemplo usaremos o seguinte: um array, dentro de outro array
const [, [, numero]] = [[, 8, 9], [3, 8, 27]];
console.log(numero);

//no primeiro array, foi ignorado o primeiro elemento e o segundo elemento é outro array inserido.
//no segundo array, foi ignorado o primeiro elemento e o segundo foi definido como numero.
//nos valores, foi inserido um primeiro array normal, e o segundo array, foi inserido 3 elementos.
//o console irá imprimir o segundo elemento do segundo array.