/*Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo. */
let primeiroNumero = parseInt(prompt("Digite o primeiro número:"))
let segundoNumero = parseInt(prompt("Digite o segundo número:"))
let numeroReal = parseFloat(prompt("Digite um número real:"))

let produto = (2 * primeiroNumero) * (segundoNumero / 2);
let soma = (3 * primeiroNumero) + numeroReal;
let potencia = Math. pow(numeroReal, 3)

console.log(produto) 
console.log(soma)
console.log(potencia)