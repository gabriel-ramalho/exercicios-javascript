/*Faça um programa que calcule o valor total investido por um colecionador em sua coleção de
CDs e o valor médio gasto em cada um deles. O usuário deverá informar 
a quantidade de CDs e o valor para em cada um. */
let quantidadeCds = parseInt(prompt("Quantos CDs"))
let totalInvestido = 0
for(let i = 0; i < quantidadeCds; i++){
  let valorCds = parseFloat(prompt("Qual valor do " + (i+1) + "º CD?"))	
  totalInvestido += valorCds
}
console.log("O valor total investido foi de: "+ totalInvestido + " reais")
console.log("O valor médio para cada CD é de: " +totalInvestido/quantidadeCds+ " reais.")