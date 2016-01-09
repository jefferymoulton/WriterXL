var express = require('express');
var router = express.Router();


router.get('/test', function(req, res) {
    res.json({ message: "'hooray! welcome to our api!'" });
});

router.get('/login', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
