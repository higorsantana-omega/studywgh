const randomNumber = [36, 99, 37, 63]

// retorna true
// caso retorne false em todos os itens 
// o filter retorna uma array vazia
// percorre todos os itens, e verifica se ele e true ou false

// o item que esta sendo iterado será adicionado em uma nova array somente quando a condição
// retornar true
const numbersGreaterThan37 = randomNumber.filter(item => item > 37)
console.log(numbersGreaterThan37, randomNumber)


const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

// retornar usuarios apenas que
// tenham o premium como true
const premiumUsers = users.filter(user => user.premium)
console.log(premiumUsers)