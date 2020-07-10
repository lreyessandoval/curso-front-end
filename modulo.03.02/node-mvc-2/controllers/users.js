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


exports.lista_usuarios = function() {
    return User.find({});
}