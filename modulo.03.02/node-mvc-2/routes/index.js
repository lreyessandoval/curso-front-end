var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    /* Get data and Render */
    userController.lista_usuarios(req, res, next);
});

module.exports = router;