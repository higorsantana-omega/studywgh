// Operadores de encapsulamento não existem no JS
// Porém, existe convenções
// Se usa o "_", isso não impede que um atributo seja acessado
// Mas indica ao programador que não pode ser acessado de forma direta || convenção

class Tv {
    relacaoCanais
    canalAtivo
    constructor() {
        this.#relacaoCanais = Array(2, 5, 7, 10)
        this.#canalAtivo = 5
        this.volume = 5
    }

    // ler
    get canalAtivo() {
        return this.#canalAtivo
    }

    // modificar
    set canalAtivo(canal) {
        if (this.#relacaoCanais.indexOf(canal) !== -1) {
            this.#canalAtivo = canal
        }
    }
}

let tv = new Tv()
// tv.canalAtivo = 10
console.log(tv.canalAtivo)