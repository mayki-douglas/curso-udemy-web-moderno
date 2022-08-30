//ARRAYS

//criado uma constante onde os valores inseridos estão dentro de um array (usando colchetes), e sempre começando do índice 0
const valores = [7.9, 6.8, 5.9, 8.2]; //array de 4 posições

console.log(valores [0], valores[3]); //impressão no console usando a cosntante e informando o índice no colchete
console.log(valores[4]); //Em javascript, se for informado o índice de um array que não existe, ele retornará o valor como 'undefined'
//lembrando que em outras linguagens, mais tipadas, isso ocorrerá um erro.

valores[4] = 15; //nesta situação, foi inserido um valor (15) na posição 4;
console.log(valores); //a impressão retornou o valor inserido.

valores[11] = 11; //situação semelhante a do caso acima, mas, o console irá imprimir o valor 11 no índice 11 e deixará "em branco" os índices restantes
console.log(valores);

console.log(valores.length); //função que mostrará a quantidade de elementos dentro do array

valores.push({id: 3}, false, null, 'teste'); //função 'push', onde insere valores dentro do array. Lembrando que, ele pode ser inserido com vários tipos, mas não é recomendado.
console.log(valores);
console.log(valores.pop()); //função 'pop', onde mostrará o ultimo elemento do array.

delete valores[0]; //função delete, deletou o elemento do índice 0 (no console, ele irá sacar o ultimo elemento do array pois a função pop está ativa no código).
console.log(valores);

console.log(typeof valores); //função que irá imprimir o tipo do array (object) já que arrays em JS são do tipo 'object'.