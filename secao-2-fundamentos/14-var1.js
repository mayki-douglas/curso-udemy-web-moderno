{
    {
        {
            {
                var palavra = "palavra"; //em Javascript, uma variável dentro de vários escopos, ainda é visível.
            }
        }
    }
}

console.log(palavra); //o console irá retornar a varíavel normalmente.

function outraPalavra(){
    var novaPalavra = "Nova Palavra"; //nesta situação, a variável está associada dentro de uma função.
    console.log(novaPalavra); //forma correta de chamar a variável que esteja associada dentro da função.
}

outraPalavra();
// console.log(novaPalavra); 
// ocasionará o erro, pois o Javascript entenderá que só podemos chamar a variável dentro da função.
// usando o Var fora de uma função, ela se tornará uma variável GLOBAL e pode ocorrer a sobrescrita da variável, evitar isso.