//hoisting em JavaScript nada mais é que o içamento de algum dado

console.log("a:", a);
var a = 2;
console.log("a:", a);

//Javascript entenderá que aqui o valor impresso na linha 3 será 'undefined', pois aconteceu o hoisting dessa variável.
//isso só ocorrerá quando declarar uma variável usando VAR.
//fazendo isso dentro de uma função, ocorrerá o mesmo resultado, mas, não é recomendado fazer isso.
//sempre declare suas variáveis primeiro, e as chame em seguida.

console.log("b:", b);
let b = 3;
console.log("b:", b);

//declarando com let, ocorrerá o erro já na linha 12, onde mostrará que a variavel B não é definida.