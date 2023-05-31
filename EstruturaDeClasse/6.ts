/*Classe TV: Faça um programa que simule um televisor 
criando-o como um objeto. 
O usuário deve ser capaz de informar o número do canal e 
aumentar ou diminuir o volume. 
Certifique-se de que o número do canal e o nível do 
volume permanecem dentro de faixas válidas.
 */
class Tv {
    constructor(
        private channel : number = 18,
        private volume : number = 0
    ){ }
    changeChannel(channel: number){
        if (channel > 0 && channel <= 100){
            this.channel = channel;
        } else {
            console.log("Channel unavailable!");
        }
    }
    upVolume (){
        if (this.volume < 100){
            this.volume += 1;
        }
        return this.volume
    }
    downVolume (){
        if(this.volume > 0){
            this.volume -= 1
        }
    }
}
const tv = new Tv()
console.log(tv)
tv.upVolume()
tv.upVolume()
console.log(tv)
tv.downVolume()
console.log(tv)
tv.changeChannel(-1)
console.log(tv)
