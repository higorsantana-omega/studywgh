/*
 * Para declarar uma array podemos instanciar utilizando o metodo new 
*/
let daysOfWeek = new Array() // []

// Podemos tambem especificar o tamanho dessa array
daysOfWeek = new Array(7) // [7 emptys]

// Também podemos passar os itens dessa array diretamente
daysOfWeek = new Array('Sunday', 'Monday') // ['Sunday', 'Monday']

/*
 * O mais aconselhavel para a criação de uma array, podemos atribuir colchetes ao inves de usar o operador new
*/
let monthsOfYear = [] // []
monthsOfYear = ['January', 'February'] // ['January', 'February']

let example = [7] // Utilizando apenas o colchetes não é possível especificar o tamanho da array
