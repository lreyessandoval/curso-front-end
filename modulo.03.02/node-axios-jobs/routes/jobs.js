var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    /* Get data and Render */
    res.render('jobs', { title: 'Job Search', records: [] });
});
module.exports = router;