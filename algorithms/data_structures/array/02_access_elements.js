const gameAwards = ['Call of duty', 'God Of War', 'Splinter Cell']

// Para acessar determinado item atraves do seu indice basta informar o indice dentro de colchetes
console.log(gameAwards[1]) // 'God of War'

// Para exibir todos os itens podemos utilizar um laço (for)
for (let i = 0; i < gameAwards.length; i++) {
  console.log(gameAwards[i])
  // 'Call of duty'
  // 'God Of War'
  // 'Splinter Cell'
}

/* Sequencia fibonacci */
const fibonacci = [0, 1, 1]

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2]
} // Preencher a array com 20 posições

console.log(fibonacci)

