class Animal {
    constructor(cor, tamanho, peso) {
      this.cor = cor
      this.tamanho = tamanho
      this.peso = peso
    }

    dormir() {
      console.log('Dormir')
    }
  }
  
  class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
      super(cor, tamanho, peso)
      this.bico = bico
    }

    voar() {
      console.log('Voar')
    }

  }

    class Papagaio extends Passaro {
        constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
      console.log('Falar')
    }
}
    
class Avestruz extends Passaro{
    constructor() {
        super('Grande', 'Branco', 250, 150) 
    }
    
    enterrarCabeca() {
        console.log('enterrar')
    }
    // Polimorfismo
    // Modificar um metodo herdado
    voar() {
        console.log('nao sabe voar')
        return false
    }
    }

let papagaio = new Papagaio(true, 'Verde', 25, 350)
console.log(papagaio)

let avestruz = new Avestruz()
console.log(avestruz)
avestruz.enterrarCabeca()
avestruz.voar()