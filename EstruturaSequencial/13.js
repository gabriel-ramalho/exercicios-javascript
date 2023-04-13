/*Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal,
utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */
let alturaUsuario = parseFloat(prompt("Digite sua altura:"))
let pesoUsuario = parseFloat(prompt("Digite seu peso:"))
let pesoIdealM
let pesoIdealF

pesoIdealM = (72.7 * alturaUsuario) - 58
pesoIdealF = (62.1 * alturaUsuario) - 44.7

console.log("Peso ideal para homens: " + pesoIdealM)
console.log("Peso ideal para mulheres: " + pesoIdealF)