var valunique = '+-/*.';

function init() {
    setValue("");
}

function addValue(val) {
    var value = getValue();

    if (value == "0") value = "";

    /* valida que no se repitan +/*-. */
    if (value.length > 0) {
        last_value = value.substring(value.length - 1, value.length);
        if (valunique.includes(last_value)) {
            if (valunique.includes(val)) {
                value = value.substr(0, value.length - 1); //remplaza por la nueva operacion...
            }
        }
    }
    value = value + val;

    setValue(value);
}

function backValue() {
    var value = getValue();
    value = value.substring(0, value.length - 1);

    setValue(value);
}

function getResult() {
    var result = eval(getValue());
    setValue(result);
}

function setValue(val) {
    val = val.toString();

    if (val == "") val = "0";

    var element = document.getElementById("resultado");
    element.innerText = val;

    //Ajusta el tamaño de la letra segun la cantidad de caracteres para el visor...
    if (val.length >= 1 && val.length <= 10) element.style.fontSize = "50px";
    if (val.length >= 11 && val.length <= 15) element.style.fontSize = "40px";
    if (val.length >= 16 && val.length <= 20) element.style.fontSize = "30px";
    if (val.length >= 21) element.style.fontSize = "20px";
}

function getValue() {
    return document.getElementById("resultado").innerText;
}