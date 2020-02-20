$(document).ready(function () {
    addsmoothScrolling();
    addsendContact();

});

function addsendContact() {

    $("#btn-sendcontact").click(function () {
        sendEmail();
    });

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

function sendEmail() {
    var contact = {
        name: $("#fld-name").val(),
        email: $("#fld-email").val(),
        phone: $("#fld-phone").val(),
        comment: $("#fld-comment").val(),
    }

    alert(JSON.stringify(contact));
}