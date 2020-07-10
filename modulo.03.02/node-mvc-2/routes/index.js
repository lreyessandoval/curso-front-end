var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    /* Get data and Render */
    var data = userController.lista_usuarios()
        .exec(function(err, data) {
            if (err) throw err;

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
        });
});

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
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


module.exports = router;