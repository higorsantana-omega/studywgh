// ---------- Literal --------------------
const obj = {}
console.log(obj)

// ---------- Literal --------------------
let produtoLiteral = {
    descricao: 'TV',
    preco: '2500',
    verDescricao: function() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()

// Melhoria literal
let nome = "higor" // nome = nome variavel / valor = valor da variavel
let idade = 12
let sexo = 'M'
let profissao = 'Programador'

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos. ${this.sexo} é ${this.profissao}`)
    }
}

objeto2.exibirResumo()

// Objetos literais são usados geralmente:
// formulario -> servidor
// recupera dados e monta um objeto literal
// obj literal -> json -> http -> server -> Armazena
// ---------- Fim Literal --------------------

// Object
console.log(typeof Object, typeof new Object)

// ------- Funcoes construtoras -------
// Pode ser como uma função, ou instanciada para um objeto
function Produto(nome, preco, desc) {
    // o this é usado para fazer referencia ao objeto criado pelo new
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

// o new é usado para instaciar um objeto
// se nao usar o new, a função é executada como uma função qualquer
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('TV', 3998.98, 0.35)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
// ------- FIM Funcoes construtoras -------


// ------- Função Factory -------
// Quando uma função não é uma classe ou um construtor, é uma função de fabrica
// Gerador de objetos
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Higor', 5200, 3)
const f2 = criarFuncionario('Sarah', 8952, 1)
console.log(f1.getSalario(), f2.getSalario())
// ------- FIM Função Factory -------



// Object.create
const filha = Object.create(null)
filha.nome = 'Joelma'
console.log(filha)


// Json
// Transformar o json em um objeto, para poder manipular como um objeto e não como um texto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)