const number = []

// Insert element in a array
// Arrays in javascript grow dynamically
number[number.length] = 2 // [2]
number[number.length] = 10
console.log(number)

// Insert elements in array with method push
number.push(12) // [2, 10, 12]
number.push(20, 30) // Insert many elements
console.log(number)

// Insert elements in array first elements with array prototype
// This function works the same as unshift
Array.prototype.insertFirstPosition = function (value) {
  // Irá percorrer todo o array de tras para frente
  for (let i = this.length; i >= 0; i--) {
    // Irá trocar a posição
    this[i] = this[i - 1]
  }
  this[0] = value
}

number.insertFirstPosition(50)
console.log(number)

