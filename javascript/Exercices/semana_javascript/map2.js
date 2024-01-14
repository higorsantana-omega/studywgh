const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// dividiu todos os valores da array
// criando uma nova array
const salePrices = prices.map(price => price / 2)

console.log(salePrices)

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

// irá percorrer cada item da array
// aqui estamos recebendo o proprio objeto
const saleProducts = products.map(product => {
    if (product.price >= 30) { // todos os produtos que tem o preço maior que 30
        // retornar um novo objeto baseado no objeto original
        return {name: product.name, price: product.price / 2}
    }
    // retorna valores que não entraram no laço de condição
    // caso não fosse inserido o return
    // o valor seria undefined
    return product
})

console.log(saleProducts, products)