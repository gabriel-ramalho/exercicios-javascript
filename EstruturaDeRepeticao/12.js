/*Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser 
conforme o exemplo abaixo: Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50*/
let numeroTabuada = parseInt(prompt("Digite um número para fazer a tabuada de 1 - 10:"))
for (let i = 0; i <= 10; i++){
  console.log(numeroTabuada + " X " + i + " = " + (numeroTabuada * i))
}