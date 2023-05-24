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

    valorDoLado(ladoQuadrado: number) {
        return ladoQuadrado;
    }

    areaQuadrado(ladoQuadrado: number) {
        return ladoQuadrado * ladoQuadrado;
    }
}
const quadrado = new Quadrado(8);
console.log(quadrado.areaQuadrado(8))

