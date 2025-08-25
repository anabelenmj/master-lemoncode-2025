//2. Concat

const arrayOne: string[] = ["Hola", "esto es", "una prueba"]
const arrayTwo: number[] = [1, 2, 3]

//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = (a: any, b: number[]) => { 
    return [...a, ...b];
};

/* console.log(concat(arrayOne, arrayTwo))
 */

//Opcional. Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
function multipleConcat (...elements: any[]) { 
    const result = [];
    elements.forEach(element => {
        element.map((item: any) => result.push(item))
    });
    return result;
};

/* console.log(multipleConcat(arrayOne, arrayTwo, ["otro array"], ["plin"])) */