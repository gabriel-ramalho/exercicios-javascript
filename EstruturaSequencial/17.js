/*Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da 
área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que 
a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam 
R$ 25,00. Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
1)comprar apenas latas de 18 litros;
2)comprar apenas galões de 3,6 litros;
3)misturar latas e galões, de forma que o desperdício de tinta seja menor. 
Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.*/
let tamanhoArea = parseInt(prompt("Qual tamanho da area a ser pintada?"))
let quantidadeLitro = tamanhoArea / 6
let lataGrande = Math.ceil(quantidadeLitro / 18)
let lataPequena = Math.ceil(quantidadeLitro / 3.6)
let misturaG = Math.trunc(((quantidadeLitro * 0.1) + quantidadeLitro)/18) 
let misturaP = Math.ceil(((quantidadeLitro - (misturaG * 18))/3.6))
let valorMistura = (misturaG * 80) + (misturaP * 25)
console.log("Se for lata de 18 litros: " + lataGrande + ". Ficará no valor de " + lataGrande * 80 + " reais")
console.log("Se for lata de 3,6 litros: " + lataPequena + ". Ficará no valor de " + lataPequena * 25 + " reais")
console.log("Mistura: " + misturaG + " lata(s) de 18 litro(s)")
console.log( misturaP + " lata(s) de 3,6 litro(s)")
console.log("A mistura ficará no valor de " + valorMistura + " reais")
