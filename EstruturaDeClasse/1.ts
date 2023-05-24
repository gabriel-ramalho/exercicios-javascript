/*Classe Bola: Crie uma classe que modele uma bola:
Atributos: Cor, circunferência, material
Métodos: trocaCor e mostraCor */
class Bola {
    constructor(
        public cor: string,
        public circunferencia: number, 
        public material: string
    ){}

    trocaCor(cor:string){
        this.cor = cor;
    }
    mostraCor(cor:string){
        return cor;
    }
}
const bola = new Bola("vermelho", 4, "borracha");
console.log(bola)


