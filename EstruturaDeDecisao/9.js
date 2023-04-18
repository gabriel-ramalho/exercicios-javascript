//Faça um Programa que leia três números e mostre-os em ordem decrescente.
let primeiroNumero = parseFloat(prompt("Digite um numero:"))
let segundoNumero = parseFloat(prompt("Digite outro numero:"))
let terceiroNumero = parseFloat(prompt("Digite mais um:"))

if (terceiroNumero > segundoNumero){
  aux = terceiroNumero
  terceiroNumero = segundoNumero
  segundoNumero = aux
}

if (segundoNumero > primeiroNumero){
  aux = segundoNumero
  segundoNumero = primeiroNumero
  primeiroNumero = aux
}

if (terceiroNumero > segundoNumero){
  aux = terceiroNumero
  terceiroNumero = segundoNumero
  segundoNumero = aux
}

console.log(primeiroNumero +", " + segundoNumero +", " + terceiroNumero)