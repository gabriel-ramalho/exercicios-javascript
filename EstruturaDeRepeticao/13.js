/*Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número 
elevado ao segundo número. Não utilize a função de potência da linguagem.*/
let numeroBase = parseInt(prompt("Digite um número base:"))
let numeroExpoente = parseInt(prompt("Digite um número expoente:"))
let numeroFinal = 1
for (let i = 0; i < numeroExpoente; i++){
  numeroFinal = numeroFinal * numeroBase
}
console.log(numeroFinal)