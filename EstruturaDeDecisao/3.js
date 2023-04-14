/*Faça um Programa que verifique se uma letra digitada é "F" ou "M". 
Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.*/
let sexoUsuario = prompt("Qual seu sexo? (F - Feminino / M - Masculino) :")
if (sexoUsuario === "F" || sexoUsuario === "f"){
  console.log("Seu sexo é feminino.")
}else if(sexoUsuario === "M" || sexoUsuario === "m"){
  console.log("O seu sexo é masculino")
}else{
  console.log("Sexo inválido")
}