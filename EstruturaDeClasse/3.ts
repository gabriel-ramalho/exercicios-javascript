/*Classe Retangulo: Crie uma classe que modele um retangulo:
1)Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
2)Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
3)Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades 
de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e 
de rodapés necessárias para o local. */
class Retangulo {
    constructor(
        public base : number,
        public altura : number
    ) { }

    alterarBase(base: number) {
        this.base = base;
    }
    alterarAltura(altura: number){
        this.altura = altura;
    }
    valorDaBase() {
        return this.base
    }
    valorDaAltura(){
        return this.altura;
    }
    areaRetangulo() {
        return this.base * this.altura;
    }
    perimetroRetangulo(){
        return (this.base*2) + (this.altura*2);
    }
}
const retangulo = new Retangulo(4, 2);
console.log(retangulo.perimetroRetangulo())

