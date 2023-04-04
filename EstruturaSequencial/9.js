/* Faça um Programa que peça a temperatura em graus Fahrenheit, 
transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9). */
let grauFahrenheit = parseInt(prompt("Converter Fahrenheit para Celsius: "))
let conversaoParaCelcius = 5 * ((grauFahrenheit - 32) / 9);

console.log("A temperatura em Celcius é: " + conversaoParaCelcius);
