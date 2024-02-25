const teams = ["PSG", "Barcelona", "Real Madrid"]
console.log(teams.unshift("São Paulo")) // Retorna o length da array
console.log(teams) // [ 'São Paulo', 'PSG', 'Barcelona', 'Real Madrid' ]

console.log(teams.shift()) // Retorna o elemento que saiu
console.log(teams) // [ 'PSG', 'Barcelona', 'Real Madrid' ]