//3. Clone Merge

const object = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
    },
}

const objectTwo = {
    nombre: "Eiby",
    direccion: {
        calle: "Calle Nueva",
    },
    tlf: 658965258,
}

//1. Clone. Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source: any) {
    const clonedObject = { ...source }
    return clonedObject
}

/* console.log(clone(object))
console.log(object) */


//2. Merge. Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source: any, target: any) {
    const mergedObj = { ...target, ...source }
    return mergedObj;
}

/* console.log(merge(object, objectTwo))
 */