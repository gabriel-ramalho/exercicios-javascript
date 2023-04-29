/**Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares 
 e a quantidade de números impares. */
let numeroBase = 1
let contadorPar = 0
let contadorImpar = 0
for (let i = 0; i < 10; i++){
  numeroBase = parseInt(prompt("Digite o "+ (i+1) + "º número :"))
  if (numeroBase % 2 == 0){
    contadorPar += 1
  }else {
    contadorImpar += 1
  }
}
console.log("Total numeros pares: " + contadorPar)
console.log("Total numeros impares: " + contadorImpar)