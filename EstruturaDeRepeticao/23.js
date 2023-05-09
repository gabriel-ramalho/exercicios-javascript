/**Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. 
 O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. 
 Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados. */
 let numeroAte = parseInt(prompt("Números primos até... ?"))

for (let index = 1; index <= numeroAte; index++){
  let contador = 0
  for (let i = 1 ; i <= index; i++){
  	if(index % i === 0){
        contador ++
      }  
  }
  if(contador == 2 || contador == 1){
	console.log("O número "+index+ " é primo, e foram realizadas " + contador + " divisões.")
	} else{
  		console.log("O número "+index+ " não é primo, e foram realizadas " + contador + " divisões.")
	}
}
