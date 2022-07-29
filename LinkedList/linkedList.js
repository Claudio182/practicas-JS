

function Node(data) {
    this.data = data
    this.next = null
}

function List() {
    this._length = 0
    this.head = null
}

List.prototype.add = function (data) {
    var node = new Node(data)
    var current = this.head
    // Si está vacia
    if (!current) {
        this.head = node
        this._length++;
        return node
    }
    // Si no esta vacia, recorro hasta
    // encontrar el último
    while (current.next) {
        current = current.next
    }
    current.next = node
    this._length++
    return node
};

List.prototype.getAll = function () {
    current = this.head; //empezamos en la cabeza
    if (!current) {
        console.log("La lista esta vacia!")
        return
    }
    while (current) {
        console.log(current.data)
        current = current.next
    }
    return
};

var listaUno = new List()

listaUno.add('Claudio')
listaUno.add("Camilo")
listaUno.add("Maria")
listaUno.add("Sebastian")
listaUno.add("Alejandro")

console.log(listaUno)

// AS78DSA--> [campera, otra campera, mochila]
// AS78DSA --> campera
