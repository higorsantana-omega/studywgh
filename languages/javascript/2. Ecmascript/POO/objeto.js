// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A3',
    valor: 69000,
    proprietario: {
        nome: 'Higor',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 15
    }, {
        nome: 'Ana',
        idade: 12
        }],
    calcularValorSeguro: function() {
        // ....
    }
}

// Formas de acessar
carro.proprietario.endereco.numero = 10 // Melhor Forma
carro['proprietario']['endereco']['logradouro'] = 'Av Pedro' // Pior forma || é uma forma verbosa de se usar
console.log(carro)

// Deletar
delete carro.condutores

// Deletar função
// delete carro.calcularValorSeguro 
console.log(carro)

