class ContaBancaria{
    // atributos
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 350
    }

    // ------- Metodos ---------
    depositar(valor) {
        this.saldo += valor
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }
    
    consultarSaldo() {
        return this.saldo
    }
}   

// Instanciar um novo objeto
let x = new ContaBancaria()
console.log(x.consultarSaldo())
console.log(x.depositar(2500))
console.log(x.consultarSaldo())