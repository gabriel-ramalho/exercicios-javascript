/*Classe Pessoa: Crie uma classe que modele uma pessoa:
Atributos: nome, idade, peso e altura
Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, a cada ano que nossa pessoa 
envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm. */
class Person {
    constructor(
        private name : string,
        private age : number,
        private weight : number,
        private height : number,
    ) { }
    getOld(years : number){
        this.age += years;
        if(this.age < 21){
            this.growUp(0.5);
        }
    }
    fatten(weight : number){
        this.weight = this.weight + weight;
    }
    loseWeight(weight : number){
        this.weight = this.weight - weight;
    }
    growUp(height : number){
        this.height += height;
    }
}
const person = new Person("Gabriel", 18, 75, 170)
console.log(person)
person.fatten(5)
person.getOld(1)
person.growUp(2)
person.loseWeight(1)
console.log(person)