var urlapiemail = "https://api.sendpulse.com/smtp/emails";

$(document).ready(function() {
    addsmoothScrolling();
    addSendContact();
    addValidate();
    addAnimation();
});

function addValidate() {
    bootstrapValidate(
        ['#fld-name', '#fld-name', '#fld-phone', '#fld-comment'],
        'required:Ingresa tus datos...'
    );
    bootstrapValidate(
        '#fld-email',
        'email:Ingrese una dirección valida de E-Mail...'
    );
}

function addSendContact() {

    $("#btn-sendcontact").click(function(event) {
        event.preventDefault();
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


    if (message == "") {
        sendemail = true;
        clearForm();
        message = "Gracias por completar el formulario... en breve nos pondremos en contacto...";

        $('html, body').animate({
            scrollTop: 0
        }, 1000, function() {
            window.location.hash = "#";
        });
    }

    if (sendemail) apiSendEmail(contact);

    $('#exampleModalCenter div .modal-body').html(message);
    $('#exampleModalCenter').modal();
}

function apiSendEmail(contact) {
    var email = {
        "email": {
            "html": "PHA+RXhhbXBsZSB0ZXh0PC9wPg==",
            "text": "Nombre:" + contact.name + " | E-Mail:" + contact.email + " | Telefono: " + contact.phone + " | Mensaje: " + contact.message,
            "subject": "Contact MyProfile",
            "from": {
                "name": "MyProfile",
                "email": contact.email
            },
            "to": [{
                "name": "Admin",
                "email": "lreyessandoval@gmail.com"
            }]
        }
    };

    $.ajax({
        url: urlapiemail,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(email),
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
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
    $(".navbar-brand").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: 0
        }, 1000, function() {
            window.location.hash = hash;
        });
    });

    $(".navbar-nav li a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            var top = $(hash).offset().top;

            $('html, body').animate({
                scrollTop: top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
}


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function addAnimation() {
    $('#Header h1, #Header h2').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '90%',
        triggerOnce: true
    });

    $('#About h2').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });

    $('#Experience h2,#Experience h4').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });

    $('#Experience li').waypoint(function() {
        $(this).toggleClass('fadeInLeft animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });

    $('#Projects h2').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });
    $('#Projects img').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });

    $('#Contact h2').waypoint(function() {
        $(this).toggleClass('bounceIn animated');
    }, {
        offset: '80%',
        triggerOnce: true
    });
}