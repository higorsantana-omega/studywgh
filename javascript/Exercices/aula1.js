// Aula 01 - Exercícios

// Exercícios extras (Aula 01):

// Os exercícios aqui propostos visam reforçar a prática da linguagem javascript de acordo com o que foi visto na primeira aula extra.

// 1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
let numeros = [1, 2, 3, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
let reduzir = (accumulator, valor) => accumulator + valor
console.log(numeros.reduce(reduzir, 0))

// 2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
let filtrarPares =  numeros.filter((n) => n % 2 === 0).reduce((accumulator, valor) => accumulator + valor)
console.log(filtrarPares)

// 3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
let filtrarImpares = numeros.filter(n => n % 2 === 1).reduce((ac, valor) => ac + valor)
console.log(filtrarImpares)

// 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)
let valoresIguais = [1, 1, 2, 3, 5, 5]
let qtd = (curr, val) => {
    if (!curr[val]) {
        curr[val] = 0
    }
    curr[val] = curr[val] + 1
    return curr
}
let times = valoresIguais.reduce(qtd, {})
console.log(times)


// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)
let umaVez = [1, 1, 2, 3, 5, , 10, 10, 11]
let qtdVez = (curr, val) => {
    if (!curr[val]) {
        curr[val] = 0
    }
    curr[val] = curr[val] + 1
    return curr
}
let timesUmaVez = umaVez.reduce(qtd, {})
console.log(timesUmaVez)



// 6) Dado um vetor com números, retorne somente os números pares;
let vetorNumeros = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12]
console.log(vetorNumeros.filter(n => n % 2 === 0))

// 7) Dado um vetor com números, retorne somente os números ímpares;
console.log(vetorNumeros.filter(n => n % 2 != 0))

// 8) Uma função é chamada da seguinte forma:
//   calculadora(10, '+', 20)
//   crie o corpo da função de forma que ela realize as 4 operações aritméticas
function calculadora(n1, op, n2) {
    switch (op) {
        case '+':
            console.log(n1 + n2)
            break
        case '-':
            console.log(n1 - n2)
            break
        case '/':
            console.log(n1 / n2)
            break
        case '*':
            console.log(n1 * n2)
            break
    }
}

calculadora(10, '+', 20)
calculadora(10, '-', 20)
calculadora(10, '/', 20)
calculadora(10, '*', 20)
