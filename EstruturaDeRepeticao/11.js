//Altere o programa anterior para mostrar no final a soma dos números.
let soma = 0
let numeroInicial = parseInt(prompt("Digite o numero que quer começar"))
let numeroFinal = parseInt(prompt("Digite o ultimo numero"))
for (; numeroInicial <= numeroFinal; numeroInicial++){
	soma += numeroInicial
}
console.log(soma)