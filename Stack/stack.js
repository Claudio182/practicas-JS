// Creamos una clase para cada nodo de la pila
class Node {
    // Cada nodo tiene dos propiedades, su valor y un puntero que indica el nodo que le sigue
    constructor(value){
        this.value = value
        this.next = null
    }
}

// Creamos una funcion constructora para el stack
function Stack() {
    // La pila tiene tres propiedades, el primer nodo, el último nodo y el tamaño de la pila
    this.first = null
    this.last = null
    this.size = 0
}

// El método push recibe un valor y lo añade a la "parte superior" de la pila
Stack.prototype.push = function(val) {
    var newNode = new Node(val)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    } else {
        var temp = this.first
        this.first = newNode
        this.first.next = temp
    }
    return ++this.size
}
// El método pop elimina el elemento que se encuentra en la "cima" de la pila y devuelve su valor
Stack.prototype.pop = function() {
    if(!this.first) return null
    var temp = this.first
    if(this.first === this.last){
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
}

const stck = new Stack

stck.push("Primero")
stck.push("Segundo")
stck.push("Tercero")
stck.push("Cuarto")
stck.push("Quinto")

console.log(stck)

console.log(stck.first) /* 
        Node {
        value: 'value3',
        next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
        }
    */

console.log(stck.size) // 3


