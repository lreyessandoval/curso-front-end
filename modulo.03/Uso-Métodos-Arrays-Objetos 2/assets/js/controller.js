/*
 Data Structure
 data: { Radiologia: [], Traumatologia: [], Dental :[] }
*/
var data = {
    "Radiologia": [{ "HORA": "11:00", "ESPECIALISTA": "IGNACIO SCHULZ", "PACIENTE": "FRANCISCA ROJAS", "RUT": "9878782-1", "PREVISION": "FONASA" }, { "HORA": "11:30", "ESPECIALISTA": "FEDERICO SUBERCASEAUX", "PACIENTE": "PAMELA ESTRADA", "RUT": "15345241-3", "PREVISION": "ISAPRE" }, { "HORA": "15:00", "ESPECIALISTA": "FERNANDO WURTHZ", "PACIENTE": "ARMANDO LUNA", "RUT": "16445345-9", "PREVISION": "ISAPRE" }, { "HORA": "15:30", "ESPECIALISTA": "ANA MARIA GODOY", "PACIENTE": "MANUEL GODOY", "RUT": "17666419-0", "PREVISION": "FONASA" }, { "HORA": "16:00", "ESPECIALISTA": "PATRICIA SUAZO", "PACIENTE": "RAMON ULLOA", "RUT": "14989389-K", "PREVISION": "FONASA" }],
    "Traumatologia": [{ "HORA": "8:00", "ESPECIALISTA": "MARIA PAZ ALTUZARRA", "PACIENTE": "PAULA SANCHEZ", "RUT": "15554774-5", "PREVISION": "FONASA" }, { "HORA": "10:00", "ESPECIALISTA": "RAUL ARAYA", "PACIENTE": "ANGÉLICA NAVAS", "RUT": "15444147-9", "PREVISION": "ISAPRE" }, { "HORA": "10:30", "ESPECIALISTA": "MARIA ARRIAGADA", "PACIENTE": "ANA KLAPP", "RUT": "17879423-9", "PREVISION": "ISAPRE" }, { "HORA": "11:00", "ESPECIALISTA": "ALEJANDRO BADILLA", "PACIENTE": "FELIPE MARDONES", "RUT": "1547423-6", "PREVISION": "ISAPRE" }, { "HORA": "11:30", "ESPECIALISTA": "CECILIA BUDNIK", "PACIENTE": "DIEGO MARRE", "RUT": "16554741-K", "PREVISION": "FONASA" }, { "HORA": "12:00", "ESPECIALISTA": "ARTURO CAVAGNARO", "PACIENTE": "CECILIA MENDEZ", "RUT": "9747535-8", "PREVISION": "ISAPRE" }, { "HORA": "12:30", "ESPECIALISTA": "ANDRES KANACRI", "PACIENTE": "MARCIAL SUAZO", "RUT": "11254785-5", "PREVISION": "ISAPRE" }],
    "Dental": [{ "HORA": "8:30", "ESPECIALISTA": "ANDREA ZUÑIGA", "PACIENTE": "MARCELA RETAMAL", "RUT": "11123425-6", "PREVISION": "ISAPRE" }, { "HORA": "11:00", "ESPECIALISTA": "MARIA PIA ZAÑARTU", "PACIENTE": "ANGEL MUÑOZ", "RUT": "9878789-2", "PREVISION": "ISAPRE" }, { "HORA": "11:30", "ESPECIALISTA": "SCARLETT WITTING", "PACIENTE": "MARIO KAST", "RUT": "7998789-5", "PREVISION": "FONASA" }, { "HORA": "13:00", "ESPECIALISTA": "FRANCISCO VON TEUBER", "PACIENTE": "KARIN FERNANDEZ", "RUT": "18887662-K", "PREVISION": "FONASA" }, { "HORA": "13:30", "ESPECIALISTA": "EDUARDO VIÑUELA", "PACIENTE": "HUGO SANCHEZ", "RUT": "17665461-4", "PREVISION": "FONASA" }, { "HORA": "14:00", "ESPECIALISTA": "RAQUEL VILLASECA", "PACIENTE": "ANA SEPULVEDA", "RUT": "14441281-0", "PREVISION": "ISAPRE" }]
};

/*
 1. Agregar las siguientes horas al arreglo de Traumatología:
*/
data.Traumatologia.push({
    "HORA": "09:00",
    "ESPECIALISTA": "RENÉ POBLETE",
    "PACIENTE": "ANA GELLONA",
    "RUT": "13123329-7",
    "PREVISION": "ISAPRE"
}, {
    "HORA": "09:30",
    "ESPECIALISTA": "MARIA SOLAR",
    "PACIENTE": "RAMIRO ANDRADE",
    "RUT": "12221451-K",
    "PREVISION": "FONASA"
}, {
    "HORA": "10:00",
    "ESPECIALISTA": "RAUL LOYOLA",
    "PACIENTE": "CARMEN ISLA",
    "RUT": "10112348-3",
    "PREVISION": "ISAPRE"
}, {
    "HORA": "10:30",
    "ESPECIALISTA": "ANTONIO LARENAS",
    "PACIENTE": "PABLO LOAYZA",
    "RUT": "13453234-1",
    "PREVISION": "ISAPRE"
}, {
    "HORA": "12:00",
    "ESPECIALISTA": "MATIAS ARAVENA",
    "PACIENTE": "SUSANA POBLETE",
    "RUT": "14345656-6",
    "PREVISION": "FONASA"
});
console.log('1. Agregar las siguientes horas al arreglo de Traumatología:');
console.log(data.Traumatologia);
document.write(getTable("Atenciones Traumatologia", data.Traumatologia));
document.write("<br><br>");



/*
2. Eliminar el primer y último elemento del arreglo de Radiología.
*/
console.log('2. Eliminar el primer y último elemento del arreglo de Radiología.');
console.log('Original');
console.log(data.Radiologia);
document.write(getTable("Atenciones Radiologia", data.Radiologia));

console.log('Modificado');
let newRadiologia = data.Radiologia;
newRadiologia.shift();
newRadiologia.pop();


console.log(newRadiologia);
document.write(getTable("Atenciones Radiologia - Modificada", newRadiologia));
document.write("<br><br>");


/*
3. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por
un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.
*/
console.log('3. Imprimir en la página HTML, mediante document.write y/o la funciones que estime conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.');
console.log(data.Dental);
document.write("<br><br>");
document.write(getTable("Atenciones Dental", data.Dental));

var newDental = data.Dental.map(item => {
    var r = [item.HORA, item.PACIENTE, item.ESPECIALISTA, item.RUT, item.PREVISION].join(' - ')
    return r;
});

console.log('ajuste formato');
console.log(newDental);

document.write("<br>");
document.write(getParagraph("Atenciones Dental", newDental));

/*
4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto,
deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.
*/
var Pacientes = [];
Pacientes = Pacientes.concat(data.Traumatologia.map(item => {
    return { "Paciente": item.PACIENTE }
}));
Pacientes = Pacientes.concat(data.Radiologia.map(item => {
    return { "Paciente": item.PACIENTE }
}));
Pacientes = Pacientes.concat(data.Dental.map(item => {
    return { "Paciente": item.PACIENTE }
}));

console.log('4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto,deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.');
console.log(Pacientes);
document.write("<br><br>");
document.write(getTable("Pacientes Clinica", Pacientes));


/*
5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA
cambiarlas por ISAPRE y viceversa. Luego, imprimir este resultado junto con el rut asociado a
dicha consulta, separados por punto y coma
*/
console.log('5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA cambiarlas por ISAPRE y viceversa. Luego, imprimir este resultado junto con el rut asociado a dicha consulta, separados por punto y coma');
console.log(data.Dental);

var dental = data.Dental.map(item => {
    return {
        "HORA": item.HORA,
        "ESPECIALISTA": item.ESPECIALISTA,
        "PACIENTE": item.PACIENTE,
        "RUT": item.RUT,
        "PREVISION": item.PREVISION == "FONASA" ? "ISAPRE" : "FONASA" /* */
    }
});

dental = dental.map(item => {
    var r = [item.RUT, item.PREVISION, item.PACIENTE].join('; ');
    return r
})

console.log('Modificado');
console.log(dental);
document.write("<br><br>");
document.write(getTable("Atenciones Dental", data.Dental));
document.write("<br><br>");
document.write(getParagraph("Atenciones Dental Modificado", dental));

/*
 Json to Html Table
*/
function getTable(caption, data) {
    var html = `<table class="table table-striped"><caption>${caption}</caption>`;

    //Header
    html += `<tr>`;
    for (col in data[0]) {
        html += `<th>${col}</th>`;
    }
    html += '</tr>';

    //Content
    data.forEach(row => {
        html += `<tr>`;
        for (col in row) {
            html += `<td>${row[col]}</td>`;
        }
        html += `</tr>`;
    });

    html += `</table>`;
    return html;
}

function getParagraph(caption, data) {
    var html = `<h3>${caption}</h3>`;

    //Content
    data.forEach(row => {
        html += `<p>${row}</p>`;
    });

    html += `</table>`;
    return html;
}