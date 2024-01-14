function criarAluno(nome, idade) {
    return { nome: nome, idade: idade }
}

let alunos = [
    criarAluno('João', 18),
    criarAluno('Ana', 28),
    criarAluno('Felipe', 21),
    criarAluno('Lucas', 18),
    criarAluno('Ronaldo', 20),
]

function menorDe20(Alunos) {
    return Alunos.idade < 20
}

console.log(alunos.filter(menorDe20))