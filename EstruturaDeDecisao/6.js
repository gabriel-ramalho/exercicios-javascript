//Faça um Programa que leia três números e mostre o maior deles.
const primeiroNumero = parseFloat(prompt("Digite um numero:"))
const segundoNumero = parseFloat(prompt("Digite outro numero:"))
const terceiroNumero = parseFloat(prompt("Digite mais um:"))
if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){ console.log(primeiroNumero)}
if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){ console.log(segundoNumero)}
if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){ console.log(terceiroNumero)}
