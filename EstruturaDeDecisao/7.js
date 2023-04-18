//Faça um Programa que leia três números e mostre o maior e o menor deles.
const primeiroNumero = parseFloat(prompt("Digite um numero:"))
const segundoNumero = parseFloat(prompt("Digite outro numero:"))
const terceiroNumero = parseFloat(prompt("Digite mais um:"))

let maiorNumero = primeiroNumero

if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
  maiorNumero = segundoNumero
}

if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){
  maiorNumero = terceiroNumero
}

let menorNumero = primeiroNumero

if (segundoNumero < primeiroNumero && segundoNumero < terceiroNumero){
  menorNumero = segundoNumero
}

if (terceiroNumero < primeiroNumero && terceiroNumero < segundoNumero){
  menorNumero = terceiroNumero
}

console.log("Maior numero -> " + maiorNumero)
console.log("Menor numero -> " + menorNumero)