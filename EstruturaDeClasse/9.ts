/*Classe Ponto e Retangulo: Faça um programa completo utilizando funções e classes que:

1)Possua uma classe chamada Ponto, com os atributos x e y.
2)Possua uma classe chamada Retangulo, com os atributos largura e altura.
3)Possua uma função para imprimir os valores da classe Ponto
4)Possua uma função para encontrar o centro de um Retângulo.
5)Você deve criar alguns objetos da classe Retangulo.
6)Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo 
do retângulo, que deve ser um objeto da classe Ponto.
7)A função para encontrar o centro do retângulo deve retornar o valor para um objeto do 
tipo ponto que indique os valores de x e y para o centro do objeto.
8)O valor do centro do objeto deve ser mostrado na tela
9)Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo. */
class Point {
    constructor(
        public x : number = 0,
        public y : number = 0,
    ) {}
}
class Rectangle {
    constructor(
        private width : number,
        private heigth : number
    ) {}
    centerwidth(){
        return (this.width)/2
    }
    centerheigth(){
        return (this.heigth)/2
    }
}
const point = new Point()
const rectangle = new Rectangle(8,10)

function centerRectangle(){
    point.x = rectangle.centerwidth()
    point.y = rectangle.centerheigth()
    console.log("The center of the rectangle is X: "+point.x+", Y: "+point.y)    
}

function main(){ 
    centerRectangle()
}
main()