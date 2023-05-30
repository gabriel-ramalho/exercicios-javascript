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
    deposit (amountdeposited: number) {
        this.balance += amountdeposited;
        return this.balance;
    }
    withdraw (withdrawalamount: number) {
        this.balance -= withdrawalamount;
        return this.balance;
    }
}
const currentAccont = new CurrentAccont("Gabriel", 5533, 0)
console.log(currentAccont)
currentAccont.deposit(90)
console.log(currentAccont)
currentAccont.withdraw(40)
console.log(currentAccont)