// to concat arrays use .concat
const numberZero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]

// concatenates in the order passed
const numbers = negativeNumbers.concat(0, positiveNumbers)
console.log(numbers) // [1, 2, 3, 0, -3, -2, -1]

// method concat always return a new array and never modify the original array
//
// concat reference object and not create a new object, example: 
const obj = { fruit: 'apple' }
const fruits = [{ fruit: 'banana' }, { fruit: 'blackberries' }]
const concatFruits = fruits.concat(obj)

console.log('Obj not modify:', obj)
console.log('Fruits:', fruits)
console.log('Concat fruits:', concatFruits)
concatFruits[2].fruit = 'apricots'
console.log('modify:', obj) // return apricots instead of apple

// concat create a new copy of elements of type string or number.

