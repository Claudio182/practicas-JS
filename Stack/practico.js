
// Crear constructor de nodo y Stack

function Stack() {
    this.last = null
    this.first = null
    this.size = 0
}

function Nodo(value) {
    this.value = value
    this.next = null
}

Stack.prototype.add = function(value) {
    let newNodo = new Nodo(value)
    if (!this.last) {
        this.first = newNodo
        this.last = newNodo
    }else {
        let stack = this.first
        this.first = newNodo
        this.first.next = stack
    }
    return ++this.size
} 

Stack.prototype.delete = function() {
    if (!this.first) return null
    let tempFirst = this.first
    if (this.first === this.last) {
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return tempFirst.value
}

let pila = new Stack()

console.log(pila.add('Claudio'))
console.log(pila.add('lorena'))
console.log(pila.add('Mauricio'))
console.log(pila.add('Sebastian'))
console.log(pila.add('Martina'))
console.log(pila.add('Camilo'))
console.log(pila.add('Gabriela')) 
console.log(pila)

console.log(pila.delete())
console.log(pila.delete())
console.log(pila.delete())
console.log(pila.delete())
console.log(pila.delete())
console.log(pila)