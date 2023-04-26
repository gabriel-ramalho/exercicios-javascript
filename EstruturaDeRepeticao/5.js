/*Altere o programa anterior permitindo ao usuário informar as populações e as 
taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.*/
let paisA = parseInt(prompt("Digite a quantidade de habitante no País A:"))
let taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento do País A(%):"))
let paisB = parseInt(prompt("Digite a quantidade de habitante no País B:"))
let taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento do País B(%):"))
let quantidadeAnos = 0

while(paisA < paisB){
  paisA += paisA * (taxaCrescimentoA/100)
  paisB += paisB * (taxaCrescimentoB/100)
  quantidadeAnos += 1
}
console.log("O país A ultrapassa ou igual em " + quantidadeAnos + " anos." )

