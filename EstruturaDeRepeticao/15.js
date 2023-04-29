/*A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... 
Faça um programa capaz de gerar a série até o n−ésimo termo. */
let quantidadeSequencia = parseInt(prompt("Digite a quantidade de sequencia Fibonacci:"))
let numeroBase = 0
let numeroAnterior = 1
for (let i = 0; i < quantidadeSequencia; i++){
  numeroBase += numeroAnterior
  numeroAnterior = numeroBase - numeroAnterior
  console.log(numeroBase)
}