//Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
let grauCelcius = parseInt(prompt("Converter Fahrenheit para Celsius: "))
let conversaoParaFahrenheit = ((grauCelcius * 9) / 5) + 32;

console.log("A temperatura em Celcius é: " + conversaoParaFahrenheit);
