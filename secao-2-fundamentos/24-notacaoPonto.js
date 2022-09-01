console.log(Math.ceil(3.2)); 
//usando a notação ponto, arredondamos o valor pro alto 
//ceil é valor pra cima e floor é pra baixo.

const obj1 = {}
obj1.nome = "Carro";
console.log(obj1.nome);

//forma correta de fazer a notação para chamar o nome da constante em si.

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("executou")
    }
}

const obj2 = new Obj("Celular");
const obj3 = new Obj("PC Gomer");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();