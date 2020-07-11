var User = require('../models/users');
const { isValidObjectId } = require('mongoose');

exports.user_create = function(req, res, next) {
    if (req.body) {
        let items = req.body
        User.create(items, function(err, newUsers) {
            if (err) return res.json({ error: err });
            //res.json(newUsers)

            res.redirect('/');
        });
    } else {
        res.json({
            status: 'ERROR',
            message: 'Debe completar todos los campos '
        }); //opcional mandar un mensaje de error
    }
}

exports.getUserList = function(req, res, next) {

    User.find(function(err, users) {
        if (err) {
            res.status(500).json({
                status: 'ERROR',
                message: err.message
            });
        }

        res.status(200).jsonp(users);
    });
}


exports.lista_usuarios = async(req, res, next) => {

    var data = await User.find({});
    /* Replace Data */
    data = data.map(item => {
        return {
            "name": reemplazar_nombres(item.name),
            "lastname": reemplazar_nombres(item.lastname),
            "email": item.email,
        };
    });

    /* Sort Data */
    data = sortByKeyAsc(data, 'name');

    res.render('newuser', { title: 'Nuevo Usuario', records: data });
}


const reemplazar_nombres = function(value) {
    return value.replace("ñ", "nn").replace("Ñ", "NN");
}

const sortByKeyDesc = function(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

const sortByKeyAsc = function(array, key) {
    return array.sort(function(a, b) {
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}