const escola = "Cod3r"

console.log(escola.charAt(4)); // comando que vai selecionar a letra ou o numero. ex. 0123 = cod3r
console.log(escola.charCodeAt(1)); // valor unicode do índice da constante

console.log(escola.substring(1)); // comando que inicia do índice 1 até o final
console.log(escola.substring(0,3)); // comando que inicia do indice 0 até o indice 3

console.log("escola ".concat(escola).concat("!")); // contatenando com valor variavel e uma constante na primeira linha
console.log("escola " + escola + "!"); // contatenação padrao igual java
console.log(escola.replace(3, "e")); // substituir o valor no indice da constante

console.log("fulano,siclano,beltrano".split(",")); //array básico
