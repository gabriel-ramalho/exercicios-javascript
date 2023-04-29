//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
let numeroFatorial = parseInt(prompt("Digite um numero para calcular seu fatorial:"))
let numeroFinal = 1
let proximoNumero = 1
for (let i = 0; i < numeroFatorial; i++){
  numeroFinal *= proximoNumero
  proximoNumero++
}
console.log(numeroFinal)