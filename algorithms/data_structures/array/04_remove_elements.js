const numbers = [0, 1, 5, 6, 10]

// Removing elements using method pop
numbers.pop() // remove last elements

// removing a element at first position
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i+1] // shift elements to the left
  console.log(numbers[i])
}
//
console.log(numbers)

// create a method to re index
Array.prototype.reIndex = function (myArray) {
  const newArray = []
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i])
    }
  }
  return newArray
}

// Remove first element and re-index
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  return this.reIndex(this)
}

numbers.removeFirstPosition()
console.log(numbers)

// In real projects should use method shift
numbers.shift()

// Method shift simule a data structure of simple queue

// To remove elements in position specify should use method splice
const newNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 10, 20]

// start and end index
newNumbers.splice(1, 5)

// not recommended use operator delete, because they return undefined
// recommended use slice, pop or shift
//
// using operator delete
delete newNumbers[0] // return undefined, its necessary use re-index


