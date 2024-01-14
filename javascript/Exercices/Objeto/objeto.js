// Criando objetos
// Literias -> Mais rapido
let obj = { prop1: 'Propriedade 1', prop2: 'Propriedade 2' }
console.log(obj)

// Construtor -> Mais lento
let obj2 = new Object()
console.log(obj2)

// Herdar propriedades do obj
let obj3 = Object.create(obj)
obj3.prop3 = 'Propriedade 3'
console.log(obj3.prop2)
console.log(obj.hasOwnProperty('prop2'))
console.log(obj3.hasOwnProperty('prop2'))

for (let prop in obj3) {
    if (obj3.hasOwnProperty(prop)){
        console.log(prop)
    }
}


// METODOS
console.log(Object.keys(obj))
console.log(Object.keys(obj).length)

console.log(obj.isPrototypeOf(obj3)) // Mostrar se ele foi herdado

console.log(JSON.stringify(obj)) // transformar em json
let stringo = '{"x":1,"y":2}'
console.log(JSON.parse(stringo)) // transformar json em objeto

// Arrays
// .push adicionar 
// .pop remover 
// podemos armazenar o valor removido
let arr = []
arr.push('Arroz', 'Feijao', 'Macarrao')
console.log(arr)
let last = arr.pop()
console.log(arr)
console.log(last)

// .join(' ') | juntar todas as propriedades
// .reverse | inverter a array modificando ela
// .sort() | ordem alfabetica

