const fetch = require("node-fetch")
/*
O que é o fetch?
R: Uma forma de fazer requisições ajax

Quando deve usar o async/await?
R: Deve-se usar o async/await quando se retorna uma promisse

O que o await faz?
R: O await ele pausa a execução do código até que a requisição seja feita

Como formatar um requisição fetch para json?
R: Requiciçoes fetch não retornam diretamente um json, para isso é necessario utilizar o metodo .json

Por que usar o await antes de formatar para json?
R: Porque o .json retorna uma promisse

Como saber quando devo usar await?
R: O await deve ser usado quando percebemos que o retorno daquele metodo é uma promisse
*/

const animeRandom = async () => {
    try {
        const quote = await fetch('https://animechan.vercel.app/api/random')
        const data = await quote.json()
        console.log(data)
    } catch (error) {
        throw new Error("OPSSPSPSPSPS")
    } 
}

animeRandom()