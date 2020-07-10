var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('newuser', { title: 'Nuevo Usuario' });
});

router.get('/newuser', function(req, res, next) {
    res.render('newuser', { title: 'Nuevo Usuario' });
});

module.exports = router;