class TablaHash {
    constructor() {
        this.tabla = new Array(127)
        this.tamano = 0
    }

    _hash(llave) {
        let hash = 0;
        for (let i = 0; i < llave.length; i++) {
            hash += llave.charCodeAt(i)
        }
        return hash % this.tabla.length
    }

    set(llave, valor) {
        const indice = this._hash(llave);
        if (this.tabla[indice]) {
            for (let i = 0; i < this.tabla[indice].length; i++) {
                // Encuentra llave-valor en el arreglo
                if (this.tabla[indice][i][0] === llave) {
                    this.table[indice][i][1] = valor;
                    return;
                }
            }
            // No encontrado, añade un nuevo llave valor
            this.tabla[indice].push([llave, valor]);
        } else {
            this.tabla[indice] = [];
            this.tabla[indice].push([llave, valor]);
        }
        this.tamano++;

    }

    get(llave) {
        const address = this._hash(llave)
        if(this.tabla[address]) {
            for(let subA of this.tabla[address]) {
                if(subA[0] === llave) {
                    return subA[1]
                }
            }
        }
        return undefined
    }

    remover(llave) {
        const indice = this._hash(llave)
        let address = this.tabla[indice]

        if (address && address.length) {
            
            for(let subA in address) {
                if(address[subA][0] === llave) {
                    this.tabla[indice].splice(subA, 1)
                    this.tamano--
                    return true
                }
            }
            return false
        } else {
            return false
        }
    }
}

let tabla = new TablaHash(100)

console.log(tabla.set('Chile', 56))
console.log(tabla.set('Peru', 47))
console.log(tabla.set('Brazil', 24))
console.log(tabla.set('Colombia', 14))
console.log(tabla.set('Venezuela', 98))

console.log(tabla)

console.log(tabla.get('Venezuela'))
console.log(tabla.get('Chile'))
console.log(tabla.get('Brazil'))

console.log(tabla.remover('Peru'))
console.log(tabla.remover('Chile'))

console.log(tabla)