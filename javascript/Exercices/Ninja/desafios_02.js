// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function doisArgumentos(x, y){
    return x + y
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let doisNumeros = doisArgumentos(5, 5) + 5

// Qual o valor atualizado dessa variável?
console.log(doisNumeros)

// Declare uma nova variável, sem valor.
let semValor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor(valor){
    semValor = valor
    console.log('O valor da variavel agora é ' + semValor)
}

// Invoque a função criada acima.
adicionarValor(20)

// Qual o retorno da função? (Use comentários de bloco).
// 20

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tresArgumento(i, a, z){
    if(i === undefined || a === undefined || z === undefined){
        console.log("Preencha todos os valores corretamente!")
    } else {
        let resultado = i * a * z
        console.log(resultado)
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
tresArgumento(20, 30)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos...

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresArgumento(20, 30, 50)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 30000

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function ultimaFuncao(a, b, c){
    if(a != undefined && b === undefined && c === undefined){
        console.log(a)
    } else if (a != undefined && b != undefined && c === undefined){
        console.log(a + b)
    } else if (a != undefined && b != undefined && c != undefined){
        console.log((a + b) / c)
    } else if (a === undefined && b === undefined && c === undefined) {
        console.log(false)
    } else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
ultimaFuncao() // False
ultimaFuncao(40) // 40
ultimaFuncao(40, 70) // 110
ultimaFuncao(40, 70, 10) // 11
