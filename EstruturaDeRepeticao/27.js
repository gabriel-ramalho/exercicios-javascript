/**Faça um programa que calcule o número médio de alunos por turma. Para isto, 
 peça a quantidade de turmas e a quantidade de alunos para cada turma. 
 As turmas não podem ter mais de 40 alunos. */
 let quantidadeTurma = parseInt(prompt("Quantas turmas existem?"))
let totalAlunos = 0
for(let i = 0; i < quantidadeTurma; i++){
  let quantidadeAluno = parseInt(prompt("Quantos alunos tem na " + (i+1) + "º turma?"))
	while(quantidadeAluno > 40){
      alert("A quantidade de alunos por turma não pode ultrapassar de 40!")
      quantidadeAluno = parseInt(prompt("Quantos alunos tem na " + (i+1) + "º turma?"))
    }
  totalAlunos += quantidadeAluno
}
let media = totalAlunos/quantidadeTurma
console.log("A média de alunos por turma é: "+ media)