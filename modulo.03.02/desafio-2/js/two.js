export var product = {
    "id": 1,
    "name": "Bujias",
    "Price": 5500,
    "description": "Bujias para automovil"
}

export const fnTwo = (data) => {
    try {
        return JSON.stringify(data)
    } catch (error) {
        console.log('Se ha generado el siguiente error' + error)
    }
}

console.log('Ejercicio 2');

console.log(fnTwo(product))