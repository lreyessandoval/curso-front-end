var data = [];

$(document).ready(function() {

    //set default values...
    document.getElementById("fecha").setAttribute("min", getDate(new Date()));
    document.getElementById("fecha").setAttribute("max", getDate(new Date(2020, 11, 31)));


});

function ValidaForm() {

    // Fetch form to apply custom Bootstrap validation
    var form = $("#formReserva");

    const rut = document.getElementById("rut");
    if (rut.value) {
        if (!module11(rut.value)) {
            showModal('Advertencia', `El RUT no es valido...`);
            rut.value = "";
        }
    }

    if (form[0].checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.addClass('was-validated');
    } else {

        /* Agrega Registro */
        const especialidad = document.getElementById("especialidad");
        const hora = document.getElementById("hora");
        const item = {
            "rut": document.getElementById("rut").value,
            "nombre": document.getElementById("nombre").value,
            "apellido": document.getElementById("apellido").value,
            "edad": document.getElementById("edad").value,
            "email": document.getElementById("email").value,
            "especialidad": especialidad.options[especialidad.selectedIndex].text,
            "fecha": document.getElementById("fecha").value,
            "hora": hora.options[hora.selectedIndex].text,
        };
        data.push(item);
        showModal('Hora Agendada', `Estimado(a) ${item.nombre} ${item.apellido}, su hora para ${item.especialidad} ha sido reservada para el día ${item.fecha} a las ${item.hora}. Además, se le envió un mensaje a su correo ${item.email} con el detalle de su cita. Gracias por preferirnos.`, true);
    }
}
/*

*/
function clearForm() {
    const especialidad = document.getElementById("especialidad");
    const hora = document.getElementById("hora");

    document.getElementById("rut").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";
    especialidad.selectedIndex = 0;
    document.getElementById("fecha").value = "";
    hora.selectedIndex = 0;
}
/*
Override alert
*/
function alert(value) {
    showModal('', value);
}

function showModal(title, value, reset) {
    var mtitle = document.getElementById('ModalTitle');
    var mmsg = document.getElementById('ModalMsg');
    mtitle.innerText = title;
    mmsg.innerText = value;

    $('#myModal').modal({
        keyboard: false
    });

    if (reset) {
        $('#myModal').on('hidden.bs.modal', function(e) {
            location.reload();
        });
    }
}

/*
 Modulo 11
*/
function module11(value) {
    var tmp = value.split('-');
    var digv = tmp[1].toUpperCase();
    var rut = tmp[0];

    //Calculo Mod11
    var M = 0,
        S = 1;
    for (; rut; rut = Math.floor(rut / 10))
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
    const result = (S ? S - 1 : 'K').toString();

    if (result == digv) return true;
    else return false;
}

function getDigitMod11(value) {
    var M = 0,
        S = 1;
    for (; value; value = Math.floor(value / 10))
        S = (S + value % 10 * (9 - M++ % 6)) % 11;
    return (S ? S - 1 : 'K').toString();
}


/*
  getDate for range input
 */
function getDate(today) {
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}