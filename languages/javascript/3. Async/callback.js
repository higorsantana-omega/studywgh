function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ---------------------
            ${corpo}
            ---------------------
            De: Omega
        `)
        callback("Ok", 5, "8s")
    }, 8000)
}

console.log("Inicio do envio")

enviarEmail("Olá, bem vindo ao Guia", "omega@email.com", (status, pessoas, tempo) => {
    console.log("Email enviado")
    console.log(`
        Status: ${status}
        ------------------
        Contatos: ${pessoas}
        ------------------
        Tempo de envio: ${tempo}
    `)
})