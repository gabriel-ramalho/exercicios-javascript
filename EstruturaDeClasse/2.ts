/*Classe Quadrado: Crie uma classe que modele um quadrado:
Atributos: Tamanho do lado
Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área; */
class Quadrado {
    constructor(
        public ladoQuadrado : number
    ) { }

    alterarLado(ladoQuadrado: number) {
        this.ladoQuadrado = ladoQuadrado;
    }

    valorDoLado() {
        return this.ladoQuadrado;
    }

    areaQuadrado() {
        return this.ladoQuadrado * this.ladoQuadrado;
    }
}
const quadrado = new Quadrado(8);
console.log(quadrado.areaQuadrado())

