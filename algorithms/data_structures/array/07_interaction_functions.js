let numbers = []

for (let i = 0; i < 15; i++) {
  numbers.push(i + 1)
}

// Verify if numbers is even
const isEven = x => x % 2 === 0

// If every find first false they stop and return false
const methodEvery = numbers.every(isEven)
console.log('Method Every:', methodEvery)

// If some find first true they stop and return true
const methodSome = numbers.some(isEven)
console.log('Method Some:', methodSome)

// forEach it's same of, they not stop
const methodForEach = numbers.forEach(isEven)
console.log('Method forEach:', methodForEach)

// map store the result of isEven in a new array
const methodMap = numbers.map(isEven)
console.log('Method Map:', methodMap) // [false, true, ...]

// filter store the expected result of isEven in a new array
const methodFilter = numbers.filter(isEven)
console.log('Method Filter:', methodFilter)

// reduce return the sum of all elements of a array
// parameters: previousValue, currentValue and optionals index and array
// the currentValue is sum in previousValue and returned
const methodReduce = numbers.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log('Method Reduce:', methodReduce)
