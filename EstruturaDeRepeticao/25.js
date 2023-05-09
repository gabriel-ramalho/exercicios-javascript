/*Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar 
se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem,
adulta ou idosa, conforme a média calculada. */
let numeroPessoas = parseInt(prompt("Digite a quantidades de pessoas na turma:"))
let contador = 0
for(let i = 1; i <= numeroPessoas; i++){
  let idadePessoas = parseInt(prompt("Digite a idade da "+ i +"º pessoa."))
  contador += idadePessoas
}
let media = contador/numeroPessoas
if(media < 26){
  console.log("A média é: "+ media+  ", a turma é jovem")
} else if(media < 60){
  console.log("A média é: "+ media+  ", a turma é adulta")
} else{
  console.log("A média é: "+ media+  ", a turma é idosa")
}