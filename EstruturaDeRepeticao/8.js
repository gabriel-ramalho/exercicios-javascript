/*Faça um programa que leia 5 números e informe a soma e a média dos números. */
let contador = 0
for (let i = 0; i < 5; i++){
  let numero = parseInt(prompt("Digite o " + (i+1) + "º numero"))
    contador += numero
}
console.log("Soma: " + contador)
console.log("Media: " + (contador/5))