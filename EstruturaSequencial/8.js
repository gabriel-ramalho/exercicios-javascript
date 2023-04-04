//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
//Calcule e mostre o total do seu salário no referido mês.
let salarioPorHora = parseInt(prompt("Quanto você ganha por hora? "))
let horasTrabalhadas = parseInt(prompt("Quantas horas você trabalha por mês?"))
let salarioMensal = salarioPorHora * horasTrabalhadas
const salarioFormatadoBr = salarioMensal.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'name',
});

console.log("Seu salário: " + salarioFormatadoBr);
