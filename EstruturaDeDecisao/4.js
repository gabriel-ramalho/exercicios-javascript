//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
let letra = prompt("Digite uma letra:")
letra = letra.toLowerCase();
if(letra =='a' || letra =='e' || letra =='i' || letra =='o' || letra =='u'){
	console.log("Você escolheu uma vogal")
}else{
  console.log("Você escolheu uma consoante")
}
