function Stack() {
    let items = []

    this.push = (element => {
        items.push(element)
    })

    this.pop = (() => {
        // remove item do topo da pilha
        return items.pop()
    })

    this.peek = (() => {
        // devolve o item que esta no topo
        return items[items.length - 1]
    })

    this.isEmpty = (() => {
        // vaazia ou nao
        return items.length === 0
    })

    this.clear = (() => {
        // limpa a pilha
        items = []
    })

    this.size = (() => {
        // tamanho da pilha
        return items.length
    })

    this.print = (() => {
        // imprimir no console
        console.log(items.toString)
    })
}

let pilha = new Stack()

pilha.push(2)
pilha.push(8)
pilha.push(3)
pilha.push(6)
console.log(pilha.peek())