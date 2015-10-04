var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'WriterXL' });
});

// Handle partial rendering for JADE/Angular
router.get('/pages/*', function(req, res, next) {
    res.render('pages/' + req.params[0]);
});

module.exports = router;
