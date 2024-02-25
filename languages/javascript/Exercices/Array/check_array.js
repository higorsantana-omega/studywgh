// Função
function is_array(nome) {
    if (toString.call(nome) === "[object Array]") {
        return true
    } else {
        return false
    }
}

// Saída
console.log(is_array('1'))
console.log(is_array([1, 2, 4, 0]))

let roupas = ["Camisa", "Camiseta", "Calça"]
console.log(roupas)


console.log(roupas[0]) // Mostrar o primeiro item da array
console.log(roupas.length) // Tamanho da array
let adicionar1 = roupas.unshift("Chinelo") // Adicionar item no começo da array
let adicionar2 = roupas.push("Meia") // Adicionar item no final da array
let primeiro = roupas.shift() // Remover item no começo da array
let ultimo = roupas.pop() // Remover item no final da array