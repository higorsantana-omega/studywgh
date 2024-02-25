// A execução da função só irá ocorrer 1.5s depois dela ser chamada, já que estamos encadeando 3 delas
// O valor dela é armazenada nos callback

function delayedSum(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 500)
}

delayedSum(2, 2, (a) => {
    delayedSum(4, 4, (b) => {
        delayedSum(a, b, (result) => {
            console.log(result)
        })
    })
})