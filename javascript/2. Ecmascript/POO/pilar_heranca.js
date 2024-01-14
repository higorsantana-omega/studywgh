class Animal{
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('dormir')
    }

}

// herdar a classe animal
class Cachorro extends Animal {
    constructor() {
        // fornece acesso ao construtor pai
        // deve ficar antes de qualquer this
        super()
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
       console.log('correr')
    }

    rosnar() {
       console.log('rosnar')
    }
}

// herdar a classe animal
class Passaro extends Animal{
    constructor(bico) {
        super()
        this.bico = bico
    }

    voar() {
        console.log('voar')
    }
}

// herdar a classe passaro que herda a classe animal
class Papagaio extends Passaro{
    constructor(sabeFalar) {
        // parametros do construtor pai
        super('Longo')
        this.sabeFalar = sabeFalar
    }
    falar() {
        console.log('Falar')
    }
}


let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio(true)

// chamar os metodos
cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.voar()
console.log(papagaio)
