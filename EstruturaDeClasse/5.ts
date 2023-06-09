/*Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir 
os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes: 
alterarNome, depósito e saque; No construtor, saldo é opcional, com valor default zero e os demais
 atributos são obrigatórios. */
 class CurrentAccont {
    constructor(
        private userName : string,
        private accountNumber : number,
        private balance : number
    ) { }
    changeName (name:string){
        this.userName = name;
        return this.userName;
    }
    deposit (amountDeposited: number) {
        this.balance += amountDeposited;
        return this.balance;
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
const currentAccont = new CurrentAccont("Gabriel", 5533, 0)
console.log(currentAccont)
currentAccont.withdraw(40)
currentAccont.deposit(90)
console.log(currentAccont)
currentAccont.withdraw(40)
console.log(currentAccont)
currentAccont.withdraw(60)
console.log(currentAccont)