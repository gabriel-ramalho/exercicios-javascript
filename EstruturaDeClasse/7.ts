/*Classe Bichinho Virtual:Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
Atributos: Nome, Fome, Saúde e Idade b. Métodos: Alterar Nome, Fome, Saúde e Idade; 
Retornar Nome, Fome, Saúde e Idade 
Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, 
este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, 
então não devemos criar um atributo para armazenar esta informação por que ela pode ser 
calculada a qualquer momento. */
class Pet{
    constructor(
        private name : string,
        private hunger : number = 100,
        private health : number = 100,
        private age : number = 1,
    ) { } 

    changeName(name : string) {
        this.name = name;
        return name;
    }
    hungerLevel(hunger : number){
        this.hunger = hunger;
        if(this.hunger > 50 && this.hunger < 80){
            console.log(`${pet.name} said: "I am hungry" `)
        }else if(this.hunger < 50 && this.hunger > 10) {
            console.log(`${pet.name} said: "I'm starving" `)
        }else {
            console.log(`${pet.name} said: "Goodbye Cruel World" `)
        }
        return hunger;
    }
    healthLevel(health : number){
        this.health = health;
        if(this.health > 50 && this.health < 80){
            console.log(`${pet.name} said: "I am hungry" `)
        }else if(this.health < 50 && this.health > 10) {
            console.log(`${pet.name} said: "I'm starving" `)
        }else {
            console.log(`${pet.name} said: "Goodbye Cruel World" `)
        }
        return health;
    }
    currentAge(age : number){
        this.age = age;
        return age;
    }
    petHumor(){
        if ((this.hunger + this.health) < 60 && this.health < 10 || this.hunger < 10) {
            console.log("Please save your pet!")
        }else if((this.hunger + this.health) < 160 && this.health > 30 || this.hunger > 30){
            console.log("Your pet's mood is not good")
        }else if ((this.hunger + this.health) > 160){
            console.log("Your pet's mood is stable")
        }
    }

}
const pet = new Pet("Snow")
console.log(pet)
pet.petHumor()
pet.hungerLevel(10)
console.log(pet)
pet.petHumor()
