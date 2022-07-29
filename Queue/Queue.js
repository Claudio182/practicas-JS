
function Node(value) {
    this.value = value
    this.next = null
}


function Queue() {
    this.first = null
    this.last = null
    this.size = 0
}



Queue.prototype.enqueue = function(value) {
    var newNode = new Node(value)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    } else {
        this.last.next = newNode
        this.last = newNode
    }
    return ++this.size
}

Queue.prototype.dequeue = function() {
    if(!this.first) return null

    var temp = this.first
    if(this.first === this.last) {
        this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
}


const cola = new Queue

cola.enqueue("1° Cliente")
cola.enqueue("2° Cliente")
cola.enqueue("3° Cliente")
cola.enqueue("4° Cliente")
cola.enqueue("5° Cliente")

console.log(cola.first) /* 
        Node {
            value: 'value1',
            next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
        }
    */
console.log(quickQueue.last) // Node { value: 'value3, next: null }
console.log(quickQueue.size) // 3

quickQueue.enqueue("value4")
console.log(quickQueue.dequeue()) // value1