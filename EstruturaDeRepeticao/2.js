/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao 
nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/
let nomeUsuario = prompt("Usuário:")
let senhaUsuario = prompt("Senha:")

while(nomeUsuario === senhaUsuario){
  alert("O nome do usuário e a senha não podem ser iguais")
  nomeUsuario = prompt("Usuário:")
  senhaUsuario = prompt("Senha:")
}	
console.log("Login realizado com sucesso!")