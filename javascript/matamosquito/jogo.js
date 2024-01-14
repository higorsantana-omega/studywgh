var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel === 'chuck') {
    criaMosquitoTempo = 750
}

// pegar tamanho da tela
function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanho()

// cronometro 
var cronometro = setInterval(function () {
    tempo -= 1
    // quando o tempo chegar a 0 
    // ele para a geração de moscas e o tempo
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
},1000)

// gerar mosquito em posições randomicas
function posicaoRandomica() {
    // remover mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            //gameover
            window.location.href = 'fim_de_jogo.html'
            
        } else {
            // adicionar coração vazio cada vez que perder
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    // gerar coordenadas de forma dinamica
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // se a posição for menor que 0 ele sera colocado
    // no canto superior esquerdo
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    // mosquito.className = 'mosca1'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // muda as classes aleatoriamente
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    // quando clicar no mosquito, apagar ele
    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito) // adicionar mosquito no html
}

// Gerar classes diferentes
// com o uso do switch
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// inverter lado do mosquito
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}