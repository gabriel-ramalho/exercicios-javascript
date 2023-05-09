//Faça um programa que calcule o mostre a média aritmética de N notas.
let notas = 0
let contador = 0
let continuar = "s"
while(continuar === "s" || continuar === "S"){
  let nota = parseInt(prompt("Digite uma nota"))
  notas += nota
  contador += 1
  continuar = prompt("Deseja continuar? (S/N)")
}
console.log("A média das notas: " + notas/contador)
