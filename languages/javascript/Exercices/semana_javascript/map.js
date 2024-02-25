const numbers = [1, 2, 3]

// multiplicar cada item de uma array
// isso gera uma nova array
const doubleNumbers = numbers.map(thisArg => thisArg * 2)

// mostrando as duas arrays
// vemos que criamos uma nova com base na original
// e a original se manteve intacta
console.log(doubleNumbers, numbers)


const num = [9, 0, 1]
num.push(12, 10, 'oi')
console.log(num)