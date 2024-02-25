let num = 2

for (let i = 0; i <= 1000; i++){
    console.log(`${num} x ${i} = ${num * i}`)

    if (i % 10 === 0) {
        console.log('------------')
    }
}