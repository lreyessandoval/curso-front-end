var urlapiemail = "https://api.sendpulse.com/smtp/emails";

$(document).ready(function () {
    addsmoothScrolling();
    addSendContact();
});

function addSendContact() {

    $("#btn-sendcontact").click(function () {
        sendEmail();
    });

}

function sendEmail() {
    var contact = {
        name: $("#fld-name").val(),
        email: $("#fld-email").val(),
        phone: $("#fld-phone").val(),
        comment: $("#fld-comment").val(),
    }
    var sendemail = false;
    var message = "";

    if (contact.name == "") message += "Favor ingresar Nombre...<br>"
    if (contact.email == "") message += "Favor ingresar E-Mail...<br>"
    if (contact.phone == "") message += "Favor ingresar Teléfono...<br>"
    if (contact.comment == "") message += "Favor ingresar Comentario...<br>"

    var link = $("a[href='#Contact']");;
    if (message == "") {
        sendemail = true;
        clearForm();
        message = "Gracias por completar el formulario... en breve nos pondremos en contacto...";
        link = $("a[href='#Home']");
    }
    link.click();
    if (sendemail) apiSendEmail(contact);

    $('#exampleModalCenter div .modal-body').html(message);
    $('#exampleModalCenter').modal();
}
function apiSendEmail(contact) {
    var email = {
        "email": {
            "html": "PHA+RXhhbXBsZSB0ZXh0PC9wPg==",
            "text": "Nomnbre:" + contact.name + " | E-Mail:" + contact.email + " | Telefono: " + contact.phone + " | Mensaje: " + contact.message,
            "subject": "Contact MyProfile",
            "from": {
                "name": "ProFile",
                "email": contact.email
            },
            "to": [
                {
                    "name": "Admin",
                    "email": "lreyessandoval@gmail.com"
                }
            ]
        }
    };

    $.ajax({
        url: urlapiemail,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(email),
        success: function (data) {
            console.log(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}
function clearForm() {
    $("#fld-name").val('');
    $("#fld-email").val('');
    $("#fld-phone").val('');
    $("#fld-comment").val('');
}
function addsmoothScrolling() {
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });
}
