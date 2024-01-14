const mongoose = require("mongoose")
const articleModel = require("./article")

// Conexão
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })

// Importar "tabel" -> model
const Article = mongoose.model("Article", articleModel)

/** 
// Instanciar um novo item no model usando o NEW
const artigo = new Article({
    title: "Livraria", author: "João", body: "Lorem ipsum"
})

// Salvar dados no banco
artigo.save().then(() => {
    console.log("Artigo salvo")
}).catch(err => {
    console.log(err)
})
*/


//Retornar todos os dados do banco de dados
/**
Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
}) */

/**
 // Retornar especifico
Article.find({'_id': '60d244367d359b203c3d92ec'}).then(article => {console.log(article)})
*/

/** 
 // Remover dados do banco de dados
Article.findByIdAndDelete("60d244367d359b203c3d92ec").then(() => { console.log("removido") }) */

// Atualizar
/**
Article.findByIdAndUpdate("60d245059c99190530690691", {
    title: 'Biblioteca',
    author: 'Higor',
    body: 'Sabe tudo que nada'
}).then(() => {
    console.log("update")
})
*/
