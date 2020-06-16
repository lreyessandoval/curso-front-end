function validar() {
    var result = "";
    var nombre = document.getElementById("nombre").value,
        apellidos = document.getElementById("apellidos").value,
        correo = document.getElementById("correo").value,
        usuario = document.getElementById("usuario").value,
        pass = document.getElementById("pass").value,
        telefono = document.getElementById("telefono").value;

    //Valida contenidos obligatorios...
    result += IsNullOrEmpty("nombre", nombre);
    result += IsNullOrEmpty("apellidos", apellidos);
    result += IsNullOrEmpty("correo", correo);
    result += IsNullOrEmpty("usuario", usuario);
    result += IsNullOrEmpty("pass", pass);
    result += IsNullOrEmpty("telefono", telefono);

    //Valida largos maximos...
    result += IsMaxLength("nombre", nombre, 30);
    result += IsMaxLength("apellidos", apellidos, 80);
    result += IsMaxLength("correo", correo, 100);
    result += IsMaxLength("usuario", usuario, 20);
    result += IsMaxLength("telefono", telefono, 15);

    //Valida formatos de correo...
    result += IsEmailFormat("correo", correo);

    if (result) {
        result = `Errores encontrados:\n ${result}`;
        alert(result);
    } else {
        //Prepara el saludo...
        var mensaje = `Bienvenido ${nombre} ${apellidos}, ya eres parte de nuestra comunidad de usuarios...\n\nPara ingresar debes usar tus credenciales:\n- Cuenta: ${usuario}\n- Contraseña: ${pass}`;
        alert(mensaje);
    }


}

function IsNullOrEmpty(field, value) {
    if (!value) return `El campo "${field}" no puede esta vacio...\n`;
    return "";
}

function IsMaxLength(field, value, max) {
    if (value)
        if (value.length > max) return `El largo del campo "${field}" no puede mayor a ${max}...\n`;

    return "";
}

function IsEmailFormat(field, value) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (value)
        if (!IsEmail(value)) return `El campo "${field}" no tiene formato de e-mail...\n`;

    return "";
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}