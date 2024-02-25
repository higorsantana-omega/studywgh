/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
*/

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var [idade] = input.split('\n');
let idade = 400


const ano = parseInt(idade / 365)
idade = idade % 365

const meses = parseInt(idade / 30)
idade = idade % 30

const dias = idade

console.log(`${ano} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)
