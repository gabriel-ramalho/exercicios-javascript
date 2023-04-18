/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'; */
let nomeUsuario = prompt("Nome(mínimo de 3 caracteres):")

while(nomeUsuario.length <= 3){
  alert("O nome tem que ter mais de 3 letras")
  nomeUsuario = prompt("Nome:")
}	

let idadeUsuario = parseInt(prompt("Idade:"))

while(idadeUsuario < 0 || idadeUsuario > 150){
  alert("Você deve ter entre 0 e 150 anos:")
  idadeUsuario = parseInt(prompt("Idade:"))
}

let salarioUsuario = parseFloat(prompt("Salario:"))

while(salarioUsuario < 0){
  alert("Você tem que ganhar alguma coisa, não pode ficar devendo")
  salarioUsuario = parseFloat(prompt("Salario:"))
}

let sexoUsuario = prompt("Sexo(F)-Feminino, (M)-Masculino:")

while(sexoUsuario != "f" && sexoUsuario != "m") {
  alert("Digite f ou m")
  sexoUsuario = prompt("Sexo(F)-Feminino, (M)-Masculino:") 
}

let estadoCivil = prompt("Estado civil(s, c, v ou d):")

while(estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v" && estadoCivil != "d"){
  alert("Não entendemos sua resposta")
  estadoCivil = prompt("Estado civil(s, c, v ou d):")
}

console.log("Informações cadastradas com sucesso!")