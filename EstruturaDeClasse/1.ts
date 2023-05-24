/*Classe Bola: Crie uma classe que modele uma bola:
Atributos: Cor, circunferência, material
Métodos: trocaCor e mostraCor */
class Bola {
    constructor(
        public cor: string,
        public circunferencia: number, 
        public material: string
    ){}
    trocaCor(){}
    mostraCor(){}
}
const bola = new Bola();
console.log(bola)


