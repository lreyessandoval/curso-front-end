/*************************************
* Carga inicial...
***************************************/
$(document).ready(function () {
    setEvent();
});

/*************************************
* Eventos....
***************************************/
function setEvent() {
    $("#btn-1").click(function () { addValue("1") });
    $("#btn-2").click(function () { addValue("2") });
    $("#btn-3").click(function () { addValue("3") });
    $("#btn-4").click(function () { addValue("4") });
    $("#btn-5").click(function () { addValue("5") });
    $("#btn-6").click(function () { addValue("6") });
    $("#btn-7").click(function () { addValue("7") });
    $("#btn-8").click(function () { addValue("8") });
    $("#btn-9").click(function () { addValue("9") });
    $("#btn-0").click(function () { addValue("0") });

    $("#btn-pluss").click(function () { addValue("+") });
    $("#btn-minus").click(function () { addValue("-") });
    $("#btn-mult").click(function () { addValue("*") });
    $("#btn-div").click(function () { addValue("/") });

    $("#btn-dot").click(function () { addValue(".") });

    $("#btn-clear").click(function () { setValue("0") });
    $("#btn-back").click(function () { backValue() });
    $("#btn-result").click(function () { getResult() });
}
/*************************************
* Metodos....
***************************************/
function addValue(val) {
    var value = getValue();
    var valunique = '+-/*.';
    if (value == "0") value = "";

    /* valida que no se repitan +/*-. */
    if (value.length > 0) {
        last_value = value.substring(value.length - 1, value.length);
        if (valunique.includes(last_value)) {
            if (valunique.includes(val)) {
                val = "";
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

/*************************************
* Funciones de Apoyo....
***************************************/

function setValue(val) {
    if (val == "") val = "0";

    $("#View").text(val);
}

function getValue() {
    return $("#View").text();
}

