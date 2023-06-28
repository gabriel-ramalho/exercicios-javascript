/*Classe Conta de Investimento: Faça uma classe contaInvestimento que seja semelhante a 
classe contaBancaria, com a diferença de que se adicione um atributo taxaJuros. 
Forneça um construtor que configure tanto o saldo inicial como a taxa de juros.
 Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta. 
 Escreva um programa que construa uma poupança com um saldo inicial de R$1000,00 e uma taxa 
 de juros de 10%. Depois aplique o método adicioneJuros() cinco vezes e imprime o saldo resultante. */
 class AccountInvestment{
    constructor(
        private userName : string,
        private accountNumber : number,
        private balance : number = 1000,
        private interestRate : number = 0.1
    ) { }
    changeName (name:string){
        this.userName = name;
        return this.userName;
    }
    deposit (amountDeposited: number) {
        this.balance += amountDeposited;
        return this.balance;
    }
    addInterest(){
       return this.balance += (this.balance*this.interestRate) 
    }
    withdraw (withdrawalAmount: number) {
        if(this.balance < withdrawalAmount || this.balance === 0){
            return console.log("Don't have enough balance")
        }else{
            this.balance -= withdrawalAmount;
            return this.balance;
        }
    }
}
const accountInvestment = new AccountInvestment("Dani", 6969)
console.log(accountInvestment)
accountInvestment.addInterest()
accountInvestment.addInterest()
accountInvestment.addInterest()
accountInvestment.addInterest()
accountInvestment.addInterest()
console.log(accountInvestment)