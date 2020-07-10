export var valores = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]

export const fnOne = (arr) => {
    return arr.map(valor => (valor * 4))
        .filter(resul => (resul >= 8))
}

console.log('Ejercicio 1')
var v = valores;
console.log(fnOne(v))