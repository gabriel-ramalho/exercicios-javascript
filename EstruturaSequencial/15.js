/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para 
o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
1. salário bruto.
2. quanto pagou ao INSS.
3. quanto pagou ao sindicato.
4. o salário líquido.
5. calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$ */
let salarioHora = parseFloat(prompt("Quanto ganha por hora?"))
let horaTrabalhadaMes = parseInt(prompt("Quantas horas você trabalha no mês?"))
let salarioBruto = salarioHora * horaTrabalhadaMes
let ir = salarioBruto * 0.11
let inss = salarioBruto * 0.08
let sindicato = salarioBruto * 0.05
console.log("Salário Bruto: " + salarioBruto)
console.log("IR: " + ir)
console.log("INSS: " + inss)
console.log("Sindicato: " + sindicato)
console.log("Salário Liquido:" + (salarioBruto - ir - inss - sindicato))
