let nomes = ['Higor', 'Sarah', 'Ana', 'Gabriel']

console.log(nomes)

for ( let index in nomes) {
    console.log(nomes[index])
    if (nomes[index] === 'Ana') {
        nomes[index] = 'Gustavo'
    }
}

console.log(nomes)
