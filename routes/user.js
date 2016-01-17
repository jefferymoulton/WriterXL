var express = require('express'),
    config = require('config'),
    jwt = require('jwt-simple'),
    mongoose = require('mongoose');

var app = express();
app.use(require('body-parser').json());

var router = express.Router();

var User = require('../models/User');

var secretKey = config.get('secret');

router.post('/create', function(req, res) {

    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isActive: true,
        dateCreated: new Date()
    });

    user.save(function(err, data) {

        if (err) {
            res.json(err);
        }

        if (data) {
            res.json({ success: 'true' });
        }
        else {
            res.json({ error: 'Something went terribly wrong' });
        }

    });

});

router.post('/login', function(req, res) {
    var email = req.body.email;

    // TODO: Encode password

    User.findOne({ email: email }, function (err, user) {

        if (err) {
            res.json({ error: 'Unable to retrieve user... ' + err });
        }

        if (!user) {
            res.status(404);
            res.json({ error: 'User not found' });
        }
        else {
            var token = jwt.encode(user, secretKey);
            res.json(token);
        }

    });
});

router.get('/checkemail/:email', function(req, res) {

    User.findOne({ email: req.params.email }, function(err, user) {

        if (err) {
            res.json({ error: 'An error occurred... ' + err });
        }

        res.json({ available: (!(user)) });

    });

});

router.get('/', function(req, res) {
    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);

    User.findOne({ email: user.email }, function (err, user) {

        if (err) {
            res.json({ error: 'Unable to retrieve user... ' + err });
        }

        if (!user) {
            res.status(404);
            res.json({ error: 'User not found' });
        }
        else {
            res.json(user);
        }

    });

    /*
    res.status(404);
    res.send('User not found');*/
});

module.exports = router;