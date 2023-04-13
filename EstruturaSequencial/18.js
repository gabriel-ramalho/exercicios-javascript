/*Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link
de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo 
usando este link (em minutos).
*/
let arquivoMb = parseInt(prompt("Digite o tamanho do arquivo em MB:"))
let velocidadeMbps = parseInt(prompt("Digite a velocidade da sua internet em Mbps:"))
let tempoDownload = (arquivoMb)/(velocidadeMbps/8)
console.log("O tempo aproximado para download é de " + tempoDownload + " segundos")