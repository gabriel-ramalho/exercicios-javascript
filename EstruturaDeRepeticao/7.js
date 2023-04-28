//Faça um programa que leia 5 números e informe o maior número.
let contador = 0
for (let i = 0; i < 5; i++){
  let numero = parseInt(prompt("Digite o " + (i+1) + "º numero"))
  if(numero > contador) {
    contador = numero
  }
}
console.log(contador)