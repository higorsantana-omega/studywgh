// A execução da função só irá ocorrer 2s depois dela ser chamada, mas como nós implementamos uma função de callback, o retorno dela será o esperado

function delayedSum(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 2000)
}

delayedSum(2, 2, (result) => { console.log(result) })