
function LinkedList() {
    this.head = null
    this._length = 0
}

function Node(data) {
    this.data = data
    this.next = null
}

LinkedList.prototype.endAdd = function (data) {
    
    let nodo = new Node(data)
    let current = this.head
    
    if(!this.head) {
        this.head = nodo
        this._length++
        return nodo
    }else{
        
        while (current.next) {
            current = current.next
        }
        current.next = nodo
        return nodo
    }
}

LinkedList.prototype.startAdd = function(data) {
    let nodo = new Node(data)
    if(!this.head){
        this.head = nodo
        this._length++
        return nodo
    }else {
        let temp = this.head
        this.head = nodo
        this.head.next = temp
        return nodo
    }
}

LinkedList.prototype.selectedAdd = function(data, postIn) {
    let nodo = new Node(data)
    let current = this.head

    if(!this.head){
        this.head = nodo
        this._length++
        console.log('El elemento se ha agregado como primer elemento ya que la lista se encontarba vacia')
    }else{
        while(current){
            current = current.next
            if(current.data.toLowerCase() === postIn.toLowerCase()){
                let temp = current.next.next
                current.next = nodo
                nodo.next = temp
                this._length++
                return nodo
            }
        }
        console.log('No se encontro el lugar a incertar')
    }
}

LinkedList.prototype.startDelete = function() {
    if(!this.head){
        console.log('Esta lista se encuentra vacia')
        return
    }else{
        let firstEle = this.head.data
        let list = this.head.next
        this.head = list
        this._length--
        return firstEle
    }
}

LinkedList.prototype.endDelete = function() {
    if (!this.head){
        console.log('La lista se encuentra vacia')
        return
    }else{
        let current = this.head
        while(current.next){
            current = current.next
        }
        let temp = current.data
        current.next = null
        this._length--
        return temp
    }
}

LinkedList.prototype.selectedDelete = function (data) {
    let current = this.head
    let anterior
    while(current){
        anterior = current
        if(current.data.toLowerCase() === data.toLowerCase()) {
            let temp = current.data
            anterior.next = current.next.next
            this._length--
            return temp
        }
        current = current.next
    }
}

let biblioteca = new LinkedList()

biblioteca.endAdd('El Quijote')
biblioteca.endAdd('La Odisea')
biblioteca.endAdd('La Iliada')
biblioteca.endAdd('La dvina comedia')
biblioteca.endAdd('Hamlet')
biblioteca.endAdd('La Eneida')
biblioteca.endAdd('Cumbres borroscosas')
biblioteca.startAdd('Sin verguenza')
biblioteca.startAdd('La casa del lago')
biblioteca.selectedAdd('El psicoanalista', 'la odisea')
console.log(biblioteca.startDelete())
console.log(biblioteca.endDelete())
console.log(biblioteca)

console.log(biblioteca.selectedDelete('la odisea'))

console.log(biblioteca)