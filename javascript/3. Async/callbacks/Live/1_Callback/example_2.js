// A execução da função só irá ocorrer 2s depois dela ser chamada, logo ela irá retornar undefined

function delayedSum(a, b) {
    setTimeout(() => {
        return a + b
    }, 2000)
}

const result = delayedSum(2, 2)
console.log(result)