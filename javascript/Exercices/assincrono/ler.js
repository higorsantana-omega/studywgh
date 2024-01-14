// const { rejects } = require('assert/strict')
// const fs = require('fs')

// fs.readFile('temporizador.js', (err, data) => {
//     fs.writeFile('temporizador-copy.js', data, (err) => {
//         console.log('Arquivo')
//     })
// })

// const readFile = path => new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve(data)
//         }
//     })
// })

// const writeFile = (path, data) => new Promise((resolve, reject) => {
//     fs.writeFile(path, data, (err) => {
//         if (err) {
//            reject(err)
//         } else {
//             resolve()
//        }
//     })
// })

// readFile('temporizador.js')
//     .then(data => writeFile('copia-promise.js', data))
//     .then( () => console.log('Arquivo copiado'))
//     .catch(err => console.log(err))

const copyFile = async() => {
    console.log('ola')
    const data = await readFile('temporizador.js')
    console.log('lido')
}

copyFile().then(() => console.log('fim'))