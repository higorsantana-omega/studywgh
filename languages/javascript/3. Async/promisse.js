// email => Resolve: "Cadastrado" - Reject: "O cadastro falhou"
function enviarEmail(corpo, para) {
    // Eu prometo que...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro =  
            console.log("enviado")
            if (!deuErro) {
                resolve({time: 3, to: "omega@oaksokas.com"}) // Certo
            } else {
                reject() // Falha
            }
        }, 3000)
    })
}

enviarEmail("ola", 'higor@omasoms.com').then(({time, to}) => {
    console.log(`
        Time: ${dados.time}
        -----------------
        to: ${dados.to}
    `)
}).catch(() => {
    console.log("Reject promisse")
})