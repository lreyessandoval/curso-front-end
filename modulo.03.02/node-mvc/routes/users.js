var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();
/* Post user */
router.post('/', function(req, res, next) {
    userController.user_create(req, res, next);
});

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;