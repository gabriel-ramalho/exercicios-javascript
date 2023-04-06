/*Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal,
utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */
let escolhaSexo = parseInt(prompt("Digite: 1- Sexo Masculino / 2- Sexo Feminino:"))
let alturaUsuario = parseFloat(prompt("Digite sua altura:"))
let pesoUsuario = parseFloat(prompt("Digite seu peso:"))
let pesoIdeal

if (escolhaSexo === 1){
  pesoIdeal = (72.7 * alturaUsuario) - 58
} else {
    pesoIdeal = (62.1 * alturaUsuario) - 44.7
}

if (pesoUsuario > pesoIdeal){
	console.log("Você precisa de uma dieta. Seu peso ultrapassou o peso Ideal que seria: " + pesoIdeal)
} else if (pesoUsuario == pesoIdeal){
    console.log(" Você está na medida")
    } else{
  	    console.log("Você precisa comer. Seu peso esta abaixo do peso Ideal que seria: " + pesoIdeal)
    }
