let i = 1
let num = 2

while (i <= 1000) {
    console.log(`${num} x ${i} = ${num * i}`)
    i += 1

    if (i % 10 === 1) {
        console.log('--------------')
    }
}