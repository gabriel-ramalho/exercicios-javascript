/*Classe Macaco: Desenvolva uma classe Macaco,que possua os atributos nome e bucho (estomago) 
e pelo menos os métodos comer(), verBucho() e digerir(). Faça um programa ou teste 
interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos 
diferentes e verificando o conteúdo do estomago a cada refeição. Experimente fazer com que,
um macaco coma o outro. É possível criar um macaco canibal? */
class Monkey{
    constructor (
        private name : string,
        private stomach : any [],
    ){ }
    eat(food: any){
        this.stomach.push(food);
    }
    seeBelly(){
        console.log(this.stomach)
    }
    digest(){
        this.stomach = [];
    }
}
const monkey1 = new Monkey("Cezar", [])
const monkey2 = new Monkey("Czar", [])
monkey1.eat("banana")
monkey1.seeBelly()
monkey2.eat("maçã")
monkey1.eat(monkey2)
monkey1.seeBelly()
monkey1.digest()
monkey1.seeBelly()
