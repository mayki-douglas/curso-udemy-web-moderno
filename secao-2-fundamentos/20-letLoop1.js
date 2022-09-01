const emptyArray = []

for(let i = 0; i < 10; i++){
    emptyArray.push(function() {
        console.log(i);
    })
}

emptyArray [4]()
emptyArray [7]()

//nessa situação os números impressos foram 4 e 7, pelo fato de usar o nome Let e o I ser invocado dentro de uma function.