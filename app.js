var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    config = require('config'),
    logger = require('morgan'),
    mongoose = require('mongoose');

var favicon = require('serve-favicon');

var routes = require('./routes');
var api = require('./routes/api');
var user = require('./routes/user');

var app = express();

// Database configuration
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.get('db'), options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

fs.readdirSync(__dirname + '/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

app.use(favicon(__dirname + '/static/img/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('less-middleware')(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

//app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));

// Set up the routes
app.use('/api', api);
app.use('/user', user);

app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html').sendfile(__dirname + '/static/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
