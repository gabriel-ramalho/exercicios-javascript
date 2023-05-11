/*Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores.
Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.*/
let totalEleitores = parseInt(prompt("Digite o total de eleitores:"))
let primeiroCandidato = 0
let segundoCandidato = 0
let terceiroCandidato = 0
let votoJogadoFora = 0
for(let i = 0; i < totalEleitores; i++){
  let voto = parseInt(prompt("Eleitor "+ (i+1) +"º, seu voto: 1 - fulano, 2 - ciclano, 3 - beltrano"))
	if(voto === 1){
      primeiroCandidato += 1
    } else if(voto === 2){
      segundoCandidato += 1
    }else if(voto === 3){
      terceiroCandidato += 1
    } else{
      votoJogadoFora += 1
    }
}
console.log("Total de votos:")
console.log("Candidato Fulano recebeu: "+primeiroCandidato+ " votos.")
console.log("Candidato Ciclano recebeu: "+segundoCandidato+ " votos.")
console.log("Candidato Beltrano recebeu: "+terceiroCandidato+ " votos.")
console.log("Votos nulos: "+ votoJogadoFora)