console.log(1)

setTimeout(() => {
    console.log('2 segundos')
}, 2000)

console.log(2)

let count = 0
let interval = setInterval(() => {
    console.log('A cada 1 segundo')
    count++
    if (count > 5) {
        clearInterval(interval)
    }
}, 1000);