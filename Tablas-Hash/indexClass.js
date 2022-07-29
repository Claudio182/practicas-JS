class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this.hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const contactList = new HashTable(50)
contactList.set("Claudio", 45228769)
contactList.set("Sebastian", 45228769)
contactList.set("Mama", 45228769)
contactList.set("Cami", 45228769)
contactList.set("Tia Ana", 45228769)
contactList.set("Ignacio", 45228769)
console.log(contactList.get("Claudio"))
console.log(contactList.get("Vale"))
console.log(contactList)
console.log(contactList.data.length)

