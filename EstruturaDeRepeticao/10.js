//Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
// intervalo compreendido por eles.
let numeroInicial = parseInt(prompt("Digite o numero que quer começar"))
let numeroFinal = parseInt(prompt("Digite o ultimo numero"))
for (; numeroInicial <= numeroFinal; numeroInicial++){
	console.log(numeroInicial)
}