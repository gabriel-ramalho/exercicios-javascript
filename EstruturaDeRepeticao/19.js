//Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
let conjuntoNumero = parseInt(prompt("Digite a quantidade de numeros:"))
let numeros 
let soma = 0
let maior = null
let menor = null
for(let i = 0; i < conjuntoNumero; i++){
  numero = parseInt(prompt("Digite o " + (i+1) + "º numero:"))
  while(numero > 1000 || numero < 0){
    alert("Só serão aceitos numeros entre 0 e 1000")
    numero = parseInt(prompt("Digite o " + (i+1) + "º numero:"))
  }
  soma += numero
  if (maior === null){
    maior = numero
  }
  if (menor === null){
    menor = numero
  }
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