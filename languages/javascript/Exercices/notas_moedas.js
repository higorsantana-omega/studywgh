let valorMonetario = 576.73

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")
for (let i = 0; i < 6; i++){
    const resultado = parseInt(valorMonetario / notas[i])
    valorMonetario = valorMonetario % notas[i]
    console.log(resultado, " nota(s) de R$", (notas[i]))
}

console.log("MOEDAS:")
for (let x = 0; x < 6; x++){
    const resultado = parseInt(valorMonetario / moedas[x])
    valorMonetario = valorMonetario % moedas[x]
    console.log(resultado, " moeda(s) de R$", moedas[x])
}
