/*Classe Retangulo: Crie uma classe que modele um retangulo:
1)Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
2)Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
3)Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades 
de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e 
de rodapés necessárias para o local. */
class Rectangle {
    constructor(
        private base : number,
        private altura : number
    ) { }

    setBase(base: number) {
        this.base = base;
    }
    setHeight(altura: number){
        this.altura = altura;
    }
    getBase() {
        return this.base
    }
    getHeight(){
        return this.altura;
    }
    calculateArea() {
        return this.base * this.altura;
    }
    calculatePerimeter(){
        return (this.base*2) + (this.altura*2);
    }
}
const base = prompt("How long is the room?")
const height = prompt("How wide is the room?")
const rectangle = new Rectangle(medidaBase, medidaAltura);
console.log("You will need  "+ rectangle.calculateArea()+ " m² of floor.")
console.log("You will need " + rectangle.calculatePerimeter()+ "m² of footer.")
