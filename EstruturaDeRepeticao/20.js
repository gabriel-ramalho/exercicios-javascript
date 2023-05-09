/**Altere o programa de cálculo do fatorial, permitindo ao usuário calcular 
 *  o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16. */
let querContinuar = prompt("Quer calcular um número fatorial? (S/N)")

while(querContinuar === "s" || querContinuar ==="S"){
	let numeroFatorial = parseInt(prompt("Digite um numero para calcular seu fatorial:"))
	let numeroFinal = 1
	let proximoNumero = 1
	for (let i = 0; i < numeroFatorial; i++){
  		numeroFinal *= proximoNumero
  		proximoNumero++
	}
	alert("O fatorial do "+numeroFatorial+" é: "+numeroFinal)
	querContinuar = prompt("Quer calcular um número fatorial? (S/N)")
}