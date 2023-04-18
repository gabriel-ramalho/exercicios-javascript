//Faça um programa que pergunte o preço de três produtos e 
//informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
const primeiroNumero = parseFloat(prompt("Digite um preço:"))
const segundoNumero = parseFloat(prompt("Digite outro preço:"))
const terceiroNumero = parseFloat(prompt("Digite mais um:"))
if (primeiroNumero < segundoNumero && primeiroNumero < terceiroNumero){ console.log("O primeiro produto" + primeiroNumero)}
if (segundoNumero < primeiroNumero && segundoNumero < terceiroNumero){ console.log("O segundo produto" + segundoNumero)}
if (terceiroNumero < primeiroNumero && terceiroNumero < segundoNumero){ console.log("O terceiro produto" + terceiroNumero)}
