/*
 Data Structure
 data: { Radiologia: [], Traumatologia: [], Dental :[] }
*/
var data = { "Radiologia": [{ "HORA": "11:00", "ESPECIALISTA": "IGNACIO SCHULZ", "PACIENTE": "FRANCISCA ROJAS", "RUT": "9878782-1", "PREVISION": "FONASA" }, { "HORA": "11:30", "ESPECIALISTA": "FEDERICO SUBERCASEAUX", "PACIENTE": "PAMELA ESTRADA", "RUT": "15345241-3", "PREVISION": "ISAPRE" }, { "HORA": "15:00", "ESPECIALISTA": "FERNANDO WURTHZ", "PACIENTE": "ARMANDO LUNA", "RUT": "16445345-9", "PREVISION": "ISAPRE" }, { "HORA": "15:30", "ESPECIALISTA": "ANA MARIA GODOY", "PACIENTE": "MANUEL GODOY", "RUT": "17666419-0", "PREVISION": "FONASA" }, { "HORA": "16:00", "ESPECIALISTA": "PATRICIA SUAZO", "PACIENTE": "RAMON ULLOA", "RUT": "14989389-K", "PREVISION": "FONASA" }], "Traumatologia": [{ "HORA": "8:00", "ESPECIALISTA": "MARIA PAZ ALTUZARRA", "PACIENTE": "PAULA SANCHEZ", "RUT": "15554774-5", "PREVISION": "FONASA" }, { "HORA": "10:00", "ESPECIALISTA": "RAUL ARAYA", "PACIENTE": "ANGÉLICA NAVAS", "RUT": "15444147-9", "PREVISION": "ISAPRE" }, { "HORA": "10:30", "ESPECIALISTA": "MARIA ARRIAGADA", "PACIENTE": "ANA KLAPP", "RUT": "17879423-9", "PREVISION": "ISAPRE" }, { "HORA": "11:00", "ESPECIALISTA": "ALEJANDRO BADILLA", "PACIENTE": "FELIPE MARDONES", "RUT": "1547423-6", "PREVISION": "ISAPRE" }, { "HORA": "11:30", "ESPECIALISTA": "CECILIA BUDNIK", "PACIENTE": "DIEGO MARRE", "RUT": "16554741-K", "PREVISION": "FONASA" }, { "HORA": "12:00", "ESPECIALISTA": "ARTURO CAVAGNARO", "PACIENTE": "CECILIA MENDEZ", "RUT": "9747535-8", "PREVISION": "ISAPRE" }, { "HORA": "12:30", "ESPECIALISTA": "ANDRES KANACRI", "PACIENTE": "MARCIAL SUAZO", "RUT": "11254785-5", "PREVISION": "ISAPRE" }], "Dental": [{ "HORA": "8:30", "ESPECIALISTA": "ANDREA ZUÑIGA", "PACIENTE": "MARCELA RETAMAL", "RUT": "11123425-6", "PREVISION": "ISAPRE" }, { "HORA": "11:00", "ESPECIALISTA": "MARIA PIA ZAÑARTU", "PACIENTE": "ANGEL MUÑOZ", "RUT": "9878789-2", "PREVISION": "ISAPRE" }, { "HORA": "11:30", "ESPECIALISTA": "SCARLETT WITTING", "PACIENTE": "MARIO KAST", "RUT": "7998789-5", "PREVISION": "FONASA" }, { "HORA": "13:00", "ESPECIALISTA": "FRANCISCO VON TEUBER", "PACIENTE": "KARIN FERNANDEZ", "RUT": "18887662-K", "PREVISION": "FONASA" }, { "HORA": "13:30", "ESPECIALISTA": "EDUARDO VIÑUELA", "PACIENTE": "HUGO SANCHEZ", "RUT": "17665461-4", "PREVISION": "FONASA" }, { "HORA": "14:00", "ESPECIALISTA": "RAQUEL VILLASECA", "PACIENTE": "ANA SEPULVEDA", "RUT": "14441281-0", "PREVISION": "ISAPRE" }] };


/*
 Count of Atention...
*/
const countAtention = [
    { "Especialidad": "Radiologia", "Atenciones": data.Radiologia.length },
    { "Especialidad": "Traumatologia", "Atenciones": data.Traumatologia.length },
    { "Especialidad": "Dental", "Atenciones": data.Dental.length }
];
console.log(countAtention);
document.write(getTable("Atenciones x Especialidad", countAtention));

document.write("<br><br>");


/*
 First & Last Atention....
*/
const firstAndLastAtention = [
    { "Especialidad": "Radiologia", "Primera Atención": getAtention(data.Radiologia, 0), "Ultima Atención": getAtention(data.Radiologia, data.Radiologia.length - 1) },
    { "Especialidad": "Traumatologia", "Primera | Ultima Atención": getAtention(data.Traumatologia, 0), "Ultima Atención": getAtention(data.Traumatologia, data.Traumatologia.length - 1) },
    { "Especialidad": "Dental", "Primera | Ultima Atención": getAtention(data.Dental, 0), "Ultima Atención": getAtention(data.Dental, data.Dental.length - 1) }
];
console.log(firstAndLastAtention);
document.write(getTable("Primera y Ultima Atención x Especialidad", firstAndLastAtention));

document.write("<br><br>");



/*
  Show data
*/

document.write(getTable("Atenciones Radiologia", data.Radiologia));
document.write("<br><br>");
document.write(getTable("Atenciones Traumatologia", data.Traumatologia));
document.write("<br><br>");
document.write(getTable("Atenciones Dental", data.Dental));


/*
  Get Atention by Index
*/
function getAtention(data, index) {
    return `${data[index].RUT} - ${data[index].PACIENTE} - ${data[index].PREVISION}`;
}


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
        html += `<tr>`;
    });

    html += `</table>`;
    return html;
}