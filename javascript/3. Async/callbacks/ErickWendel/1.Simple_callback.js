// Callback é uma função passada para uma outra função como argumento, e é invocada dentro da função externa

function greeting(name) {
    console.log('Olá ', name)
}

function processUser(callback) {
    const name = 'Higor'
    callback(name)
}

processUser(greeting)