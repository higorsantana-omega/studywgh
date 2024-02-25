// Para este exercicio aplique a lógica necessário para mostrar os anos que são realmente bissextos, respeitando a regra: Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).

for (let a = 1000; a <= 2030; a += 4){
    if (a % 4 === 0) {
        if (a % 100 != 0) {
            console.log(a)
        }
    }
}

for (let a = 1000; a <= 2030; a += 4){
    if (a % 4 === 0 && a % 100 != 0) {
        console.log(a)
    }
}

let c = 1000

while (c <= 2030) {
    if (c % 4 === 0) {
        if (c % 100 != 0) {
            console.log(c)
        }
    }
    c += 4
}