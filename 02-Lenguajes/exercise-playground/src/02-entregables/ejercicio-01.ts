// ARRAY OPERATIONS
//Las funciones inmutables quiere decir no modificar el array original. 

// 1. Head. Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const elements: string[] = ["Primer elemento", "Segundo elemento", "Tercer elemento", "Otro"]

const head = (array: string[]) => { 
    const [first] = array; 
    return [first];
}

/* console.log(head(elements)) */


//2. Tail. Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (array: string[]): string[] => {
    const [first, ...rest] = array;
    return [...rest];
}

/* console.log(tail(elements)) */


//3. Init. Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
//El método slice crea un nuevo array sin cambiar el array original. En cambio, el .pop si modifica el array original.

const numberElements = [1, 2, 3, 4, 5, 6, 55, 678]

const init = (array: number[]): number[] => { return array.slice(0, -1); }

/* console.log(init(numberElements))
console.log(numberElements) */


//4. Last. Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
//utilizamos el metodo .at() para que nos devuelva el valor de la posición del array que queramos. En este caso, al ser el último, pondremos -1.
const last = (array: number[]): number => { return array.at(-1); }

/* console.log(last(numberElements))
console.log(numberElements) */