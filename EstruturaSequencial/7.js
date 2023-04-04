//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let ladoQuadrado = parseInt(prompt("Digite o lado do quadrado: "))
let areaDoQuadrado = Math.pow(ladoQuadrado, 2)
let dobroAreaQuadrado = areaDoQuadrado * 2

console.log("Área do quadrado: " + areaDoQuadrado);
console.log("Dobro da área do quadrado: " + dobroAreaQuadrado);
