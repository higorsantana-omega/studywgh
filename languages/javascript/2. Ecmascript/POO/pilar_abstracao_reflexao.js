// ------- Paradigma Procedural ---------
// ------------- Cadeira ----------------
let qtd_pernas = 3
let giratoria = false
let cor = 'azul'

function girar_cadeira() {
    if (giratoria === true) {
        console.log("Ela gira")
    } else {
        console.log("Ela não gira")
    }
}
girar_cadeira()
// ------- Fim Paradigma Procedural ---------

// ------- POO ---------
class Cadeira {
    constructor(qtd_pernas, giratoria, cor) {
        this.qtd_pernas = qtd_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if (this.giratoria === true) {
            console.log('girou')
        } else{
            console.log('nao gira')
        }
    }
}

let cadeira = new Cadeira(4, false, 'verde')
let cadeira2 = new Cadeira(4, true, 'verde')

cadeira.girarCadeira()
cadeira2.girarCadeira()
// ------- FIM POO ---------




// ------- Sofá POO ---------
class Sofa {
    constructor(qtd_lugares, cor, couro, acessorio, preco, modelo) {
        this.qtd_lugares = qtd_lugares
        this.cor = cor
        this.couro = couro
        this.acessorio = acessorio
        this.preco = preco
        this.modelo = modelo
    }

    calcularPreco() {
        let multiplicador = 0

        if (this.qtd_lugares > 2) {
            multiplicador += 1.5
        } else {
            multiplicador += 1.2
        }
        if (this.couro === true) {
            multiplicador += 0.5
        }
        if (this.acessorio === true) {
            multiplicador += 0.3
        }

        this.preco = 500 * multiplicador
        return this.preco
    }
}

let sofa = new Sofa(3, 'azul', true, true, 0, 'americano')
let sofa2 = new Sofa(2, 'azul', false, false, 0, 'americano')
console.log(sofa.calcularPreco())
console.log(sofa2.calcularPreco())

// ----- FIM Sofá POO -------




