/**Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
 * Um número primo é aquele que é divisível somente por ele mesmo e por 1. */
let numeroInteiro = parseInt(prompt("Digite um número inteiro"))
let contador = 0
for (let i = 1 ; i <= numeroInteiro; i++){
	if(numeroInteiro % i === 0){
      contador ++
    }  
}
if(contador == 2 || contador == 1){
	console.log("É primo")
} else{
  console.log("Não é primo")
}
