/*Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados 
da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados 
e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades 
de latas de tinta a serem compradas e o preço total.*/
let tamanhoArea = parseInt(prompt("Qual tamanho da area a ser pintada?"))
let quantidadeLitro = tamanhoArea / 3
let quantidadeLatas = Math.ceil(quantidadeLitro / 18)
console.log("Você deverá comprar: " + quantidadeLatas + " lata(s) de tinta(s)")
console.log("Ficará no valor de: " + quantidadeLatas * 80 +" reais")
