/*Classe Funcionário: Implemente a classe Funcionário. Um empregado tem um nome (um string)
 e um salário(um double). Escreva um construtor com dois parâmetros (nome e salário) e 
 métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe. */
 class Employee{
    constructor(
        private name: string,
        private salary: number,
    ){}

    setName(setName:string){
        return this.name = setName;
    }
    setSalary(setSalary:number){
        return this.salary = setSalary;
    }
    increaseSalary(increaseSalary: number){
        return this.salary += (this.salary*(increaseSalary/100))
    }
}
const employee = new Employee("Holder", 2500)
console.log(employee)
employee.setName("Bono")
employee.increaseSalary(5)
console.log(employee)
employee.setSalary(3000)
employee.increaseSalary(10)
console.log(employee)