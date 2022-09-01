const emptyArray = []

for(var i = 0; i < 10; i++){
    emptyArray.push(function() {
        console.log(i);
    })
}

emptyArray [4]()
emptyArray [7]()

//nesta situação, mesmo o i sendo invocado no console.log dentro de uma função, o VAR não possui escopo de bloco.
//a constante emptyArray ira imprimir os mesmos valores.