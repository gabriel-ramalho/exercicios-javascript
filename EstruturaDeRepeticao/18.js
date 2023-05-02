/**Faça um programa que, dado um conjunto de N números, determine o menor valor, 
 * o maior valor e a soma dos valores. */
let conjuntoNumero = parseInt(prompt("Digite a quantidade de numeros:"))
let numeros 
let soma = 0
let maior = 1
let menor = 999999
for(let i = 0; i < conjuntoNumero; i++){
  numero = parseInt(prompt("Digite o " + (i+1) + "º numero:"))
  soma += numero
  if (numero > maior){
   	 maior = numero
  }else {
    if (menor > numero){
    menor = numero
    }
  }
}
console.log("O maior número: " + maior)
console.log("O menor número: " + menor)
console.log("A soma dos valores: " + soma)