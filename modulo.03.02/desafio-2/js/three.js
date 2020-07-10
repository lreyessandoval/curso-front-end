import { fnOne, valores } from "../js/one";
import { fnTwo, product } from "../js/two";

const fnThree = (param1, param2) => {
    try {
        return {
            "status": "ok",
            "one": fnOne(param1),
            "two": fnTwo(param2)
        }
    } catch (error) {
        console.log('Se ha generado el siguiente error' + error)
    }

}

console.log('Ejercicio 3')
console.log(fnThree(valores, product))