var express = require('express'),
    mongoose = require('mongoose');

var router = express.Router();

var User = require('../models/User');

router.get('/test', function(req, res) {
    res.json({ message: "'hooray! welcome to our api!'" });
});

router.post('/user/login', function(req, res) {

});

router.post('/user/authenticate', function(req, res) {
    res.json(user.authenticate(req.body.email, req.body.password));
});

router.get('/user/checkemail/:email', function(req, res) {

    User.findOne({ email: req.params.email }, function(err, user) {

        if (err) {
            res.json({ error: 'An error occurred... ' + err });
        }

        res.json({ available: (!(user)) });

    });

});

module.exports = router;