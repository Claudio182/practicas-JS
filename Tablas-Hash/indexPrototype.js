function HashTable(size) {
    this.data = new Array(size)
}

HashTable.prototype.hash = function (key) {
    let hash = 0
    for (let value in key){
        hash = (hash + key.charCodeAt(value)) % this.data.length
    }
    return hash
}

HashTable.prototype.set = function (key, value) {
    let address = this.hash(key)
    if (!this.data[address]) {
        this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
}

HashTable.prototype.get = function (key) {
    let address = this.hash(key)
    let currentBucket = this.data[address]
    if (currentBucket) {
        for (let value in this.data) {
            if (currentBucket[value][0]) {
                return currentBucket[value][1]
            }
        }
    }
    return undefined
}

const myTable = new HashTable(20)
myTable.set("Claudio", 45228769)
myTable.set("Sebastian", 45228955)
myTable.set("Mama", 45228000)
myTable.set("Cami", 45228999)
myTable.set("Tia Ana", 45228333)
myTable.set("Ignacio", 4522222)
console.log(myTable.get("Claudio"))
console.log(myTable.get("Vale"))



console.log(myTable)
console.log(myTable.data.length)