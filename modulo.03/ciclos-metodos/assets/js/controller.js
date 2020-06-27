function selectedMenu() {
    // const opc = document.getElementById("opcion");

    var opc = "";
    while (opc != "6") {
        opc = "";
        var menu = `Menu\n1.-Numero de cero a N\n2.-¿De qué color es el caballo blanco de Napoleón?\n3.- Promedio de Notas\n4.-Nombre de Frutas\n5.-Vocales y Consonantes\n6.-Salir \n\nIndique el numero del ejercicio a Ejecutar:`;
        opc = prompt(menu, opc);

        if (opcIsValid(opc)) {
            switch (opc) {
                case '1':
                    exercise1();
                    break;
                case '2':
                    exercise2();
                    break;
                case '3':
                    exercise3();
                    break;
                case '4':
                    exercise4();
                    break;
                case '5':
                    exercise5();
                    break;
            }

        } else
            alert("Los numeros validos son entre 1 y 6...");
    }
}

function opcIsValid(number) {
    var regex = /([1-6])/;
    return regex.test(number) ? true : false;
}

function showResult(text) {
    var li = document.createElement("li");
    var t = document.createTextNode(text);
    var ul = document.getElementById("list");
    li.appendChild(t);
    ul.appendChild(li);

    console.log(text);
}

function clearResult() {
    var ul = document.getElementById("list");
    ul.innerText = "";
}
/*
1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números desde el 0 hasta el número que ingresó el usuario.
*/
function exercise1() {
    clearResult();
    var exit = false;
    while (!exit) {
        var msg = `Ingrese un numero entre 1 y 100:`;
        var num = "";
        num = prompt(msg, num);

        if (/([1-9]|[1-8][0-9]|9[0-9]|100)/.test(num)) {
            showResult('1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números desde el 0 hasta el número que ingresó el usuario.');
            showResult(`Números de 0 a ${num}`);
            for (var i = 0; i <= num; i++) {
                showResult(i);
            }
            exit = true;
        } else
            alert("Los numeros validos son entre 1 y 100...");
    }
}

/*
2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo contrario, se le dejará de hacer la pregunta.
*/
function exercise2() {
    clearResult();
    var exit = false;
    while (!exit) {
        var msg = `¿De qué color es el caballo blanco de Napoleón?`;
        var resp = "";
        resp = prompt(msg, resp);

        switch (resp.toLowerCase()) {
            case "blanco":
                showResult('2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo contrario, se le dejará de hacer la pregunta.');
                showResult(`El caballo es ${resp}`);

                exit = true;
                break;
        }
    }
}

/*
3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego, debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El promedio de notas mostrado debe estar redondeado a un número entero.
*/
function exercise3() {
    clearResult();

    var prom = 0;
    var ramos = [
        { "nombre": "Matemáticas", "nota": 0 },
        { "nombre": "Física", "nota": 0 },
        { "nombre": "Ciencias", "nota": 0 }
    ]

    ramos.forEach(ramo => {
        var exit = false;
        while (!exit) {
            var msg = `Ingrese la nota para el ramo ${ramo.nombre}:`;
            ramo.nota = prompt(msg, ramo.nota);

            if (/([1-7])/.test(ramo.nota)) {
                prom = prom + parseInt(ramo.nota);
                exit = true;
            } else
                alert("Los numeros validos son entre 1 y 7...");
        }
    });
    prom = Math.round(prom / 3);
    alert(`El promedio es ${prom}`);

    showResult('3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego, debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El promedio de notas mostrado debe estar redondeado a un número entero.');
    showResult(`El promedio es ${prom}`);
}

/*
4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas por consola, a excepción de la que tenga el nombre de “manzana”.
*/
function exercise4() {
    clearResult();

    var frutas = [
        { "id": 1, "nombre": "" },
        { "id": 2, "nombre": "" },
        { "id": 3, "nombre": "" }
    ]

    frutas.forEach(fruta => {
        var exit = false;
        while (!exit) {
            var msg = `Ingrese la nota para la fruta ${fruta.id}:`;
            fruta.nombre = prompt(msg, fruta.nombre);

            // if (/([a-7])/.test(fruta.nombre)) {
            exit = true;
            // } else
            //     alert("Los numeros validos son entre 1 y 7...");
        }
    });
    showResult('4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas por consola, a excepción de la que tenga el nombre de “manzana”.');
    frutas.filter(item => (item.nombre.toLowerCase() != "manzana")).forEach(fruta => {
        showResult(`Fruta ${fruta.id} nombre ${fruta.nombre}`);
    });
}


/*
  5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).
*/
function exercise5() {
    clearResult();

    var msg = `Ingrese su nombre:`;
    var nombre = prompt(msg, nombre);

    const vocales = "aeiou";
    const consonantes = "bcdfghjklmnñpqrstvwxyz";

    const cantVocales = nombre.toLowerCase().split('').filter(letra => vocales.includes(letra)).length;
    const cantConsonantes = nombre.toLowerCase().split('').filter(letra => consonantes.includes(letra)).length;
    alert(`Su nombre ${nombre} tiene ${cantVocales} vocales y ${cantConsonantes} consonantes...`);

    showResult('5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).');
    showResult(`Su nombre ${nombre} tiene ${cantVocales} vocales y ${cantConsonantes} consonantes...`);
}