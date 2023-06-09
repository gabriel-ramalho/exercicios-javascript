/*Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:

a)Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
    1) tipoCombustivel.
    2) valorLitro
    3) quantidadeCombustivel
b)Possua no mínimo esses métodos:
    1) abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
    2) abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
    3) alterarValor( ) – altera o valor do litro do combustível.
    4) alterarCombustivel( ) – altera o tipo do combustível.
    5) alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba.
OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. */
class FuelPump{
    constructor (
    private typeOfFuel : string,
    private literValue : number,
    private fuelQuantity : number = 1000,
    private totalLitters : number = 0
    ){}
    supplyValue(supplyValue: number){
        this.totalLitters = supplyValue/this.literValue
        if (this.fuelQuantity > this.totalLitters){
            this.fuelQuantity -= this.totalLitters
            console.log("You supply "+this.totalLitters+" litters, and has "+this.fuelQuantity+" litters remaining at the pumps ")
        }
    }
    supplyLiter(supplyLiter: number){
        this.totalLitters = this.literValue * supplyLiter;
        if(this.fuelQuantity > supplyLiter){
            this.fuelQuantity -= supplyLiter
            console.log("You will pay "+this.totalLitters+", and has "+this.fuelQuantity+" litters remaining at the pumps ")
        }
    }
    changeValue(literValue: number){
        this.literValue = literValue;
    }
    changeFuel(typeOfFuel: string){
        this.typeOfFuel = typeOfFuel;
    }
    changeFuelQuantity(fuelQuantity: number){
        this.fuelQuantity = fuelQuantity;
    }
};
const fuelPump = new FuelPump("gasoline", 4)
fuelPump.supplyValue(40)
fuelPump.supplyLiter(50)