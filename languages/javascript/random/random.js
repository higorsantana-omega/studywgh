console.time('texto aleatorio')
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

let words = []


function textoAleatorio(){
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let aleatorio = '';
    for (let i = 0; i < getRandom(3, 5); i++) {
        let rnum = Math.floor(Math.random() * letras.length);
        aleatorio += letras.substring(rnum, rnum + 1);

    }
    return aleatorio;
}

for (var i = 0; i < 1000 ; i++) { 
    words.push(textoAleatorio())
}

// console.log(words)

let inverter = words.map(word => {
    word.split('').reverse().join('')
    return word
})

// console.log(inverter)

let polindromos = []

let comparar = words.filter(word1 => {
    inverter.filter(word2 => {
        if (word1.split('').reverse().join('') === word2) {
            polindromos.push(word1)
        }
    }) 
})

console.log(polindromos)
console.timeEnd('texto aleatorio')


