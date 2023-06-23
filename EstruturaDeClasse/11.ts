/* Classe carro: Implemente uma classe chamada Carro com as seguintes propriedades:

1) Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
2) O consumo é especificado no construtor e o nível de combustível inicial é 0.
3) Forneça um método andar( ) que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
4) Forneça um método obterGasolina( ), que retorna o nível atual de combustível.
5) Forneça um método adicionarGasolina( ), para abastecer o tanque. Exemplo de uso:
meuFusca = Carro(15);           # 15 quilômetros por litro de combustível. 
meuFusca.adicionarGasolina(20); # abastece com 20 litros de combustível. 
meuFusca.andar(100);            # anda 100 quilômetros.
meuFusca.obterGasolina()        # Imprime o combustível que resta no tanque.*/
class Car{
    constructor(
        private fuelConsumption: number,
        private fuelTank : number = 0
    ){}
    walk(walk: number){
        let consumptionCar = walk/this.fuelConsumption;
        if(consumptionCar <= this.fuelTank){
            this.fuelTank -= consumptionCar
            console.log("You ride "+walk+" km. Used "+consumptionCar+" litters. Still remains "+this.fuelTank+" litters." )
        }
    }
    getGasoline(){
        console.log("You have "+this.fuelTank+" litters.");
    }
    addGasoline(addGasoline: number){
        this.fuelTank += addGasoline;
    }
}
const myBeetle = new Car(15)
myBeetle.addGasoline(20)
myBeetle.getGasoline()
myBeetle.walk(100)
myBeetle.getGasoline()