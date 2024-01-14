// interactos introduzed in es6
// for...of
const numbers = [0, 1, 2, 3]

for (const n of numbers) {

  console.log(n % 2 === 0 ? 'even' : 'odd')
}

// Using @@iterator
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2

iterator = numbers[Symbol.iterator]()
for (const n of iterator) {
  console.log(n)
}

// Method entries return a @@iterator
const arrayEntries = numbers.entries()
console.log(arrayEntries.next().value) // [0, 0] - position 0, value 0
console.log(arrayEntries.next().value) // [1, 1] - position 1, value 1
// key and value is most used in hash maps

// Method keys retur a @@iterator and return the value of keys
// if value is false it return done === true


// Method array from create a new array of a array exist
const numbers2 = Array.from(numbers)

// it possible use function
const evens = Array.from(numbers, x => (x % 2 === 0))
console.log(evens) // it return all all numbers equal even

