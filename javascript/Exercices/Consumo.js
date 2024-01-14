/*
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), 
e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.
*/

let distancia = parseInt(500)
let combustivel = parseFloat(35)

const media = (distancia / combustivel).toFixed(3)
console.log(media)