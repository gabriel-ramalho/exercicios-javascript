//Faça um Programa que peça dois números e imprima o maior deles.
let numeroUm = parseInt(prompt("Digite o primeiro numero:"))
let numeroDois = parseInt(prompt("Digite o segundo numero:"))
if (numeroUm > numeroDois){
  console.log("O numero " + numeroUm + " é maior que " + numeroDois)
}else{
  console.log("O numero " + numeroDois + " é maior que " + numeroUm)
}