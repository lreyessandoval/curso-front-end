$(document).ready(function () {
    addsmoothScrolling();
    addsendContact();

});

function addsendContact() {

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
    var message = "";

    if (contact.name == "") message += "Favor ingresar el Nombre...<br>"
    if (contact.email == "") message += "Favor ingresar el E-Mail...<br>"
    if (contact.phone == "") message += "Favor ingresar el Teléfono...<br>"
    if (contact.comment == "") message += "Favor ingresar el Comentario...<br>"

    var link = $("a[href='#Contact']");;
    if (message == "") {
        clearForm();
        message = "Gracias por completar el formulario... en breve nos pondremos en contacto...";
        link = $("a[href='#Home']");
    }
    link.click();
    $('#exampleModalCenter div .modal-body').html(message);
    $('#exampleModalCenter').modal();

    //alert(JSON.stringify(contact));
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
