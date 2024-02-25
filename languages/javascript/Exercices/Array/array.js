console.log(typeof Array, typeof [])

const nums = [1, 2, 3]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

let resultado2 = nums.map(function(e) {
    return e + 10
})

console.log(resultado2)

let resultado3 = nums.map(function(e) {
    return e * 3
})

console.log(resultado3)

let dinheiro = [17.99, 304.64, 1006.27]

let resultado4 = dinheiro.map(function (e) {
    return `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
})

console.log(resultado4)

let resultado5 = dinheiro.map(function (e) {
    return parseFloat(e).toFixed(2).replace('.', ',')
})

console.log(resultado5)

// ================================================================================== 

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]
