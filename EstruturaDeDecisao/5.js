/*Faça um programa para a leitura de duas notas parciais de um aluno. 
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
const notaUm = parseFloat(prompt("Digite a primeira nota do aluno:"))
const notaDois = parseFloat(prompt("Digite a segunda nota do aluno:"))
const mediaNota = (notaUm + notaDois) / 2;
if (mediaNota === 10){
  console.log("Aprovado com Distinção")
}else if(mediaNota >=7){
  console.log("Aprovado")
}else {
  console.log("Reprovado")
}