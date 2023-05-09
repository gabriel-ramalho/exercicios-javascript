/**Altere o programa de cálculo dos números primos, informando, 
 caso o número não seja primo, por quais número ele é divisível. */
 let numeroInteiro = parseInt(prompt("Digite um número inteiro"))
let contador = 0
console.log("Segue lista de divisores:")
for (let i = 1 ; i <= numeroInteiro; i++){
	if(numeroInteiro % i === 0){
      contador ++
      console.log(i)
    }  
}
if(contador == 2 || contador == 1){
	console.log("É primo")
} else{
  console.log("Não é primo")
}
