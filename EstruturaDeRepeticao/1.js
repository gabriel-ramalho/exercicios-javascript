/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso 
o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/
let notaValida = prompt("Digite um numero entre 0 -10")

while (notaValida > 10 || notaValida < 0){
  notaValida = prompt("Digite um numero valido")
}
console.log("Seu numero é: " + notaValida)