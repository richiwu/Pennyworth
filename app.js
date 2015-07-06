var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//MS had this line commented out in their final product. Doing the same just in case
//global.passport = passport;
var session = require('express-session');
//for database
var mongoose = require('mongoose');      
//initialize mongoose schemas
//the order of the require calls are important as you could get errors if they were placed in the wrong order
//in this case, since models.js requires mongoose, the require call to models.js has to be called after require('mongoose');
//and it has to be called before passport-init, since passport-init require the models to be executed
var models = require('./models/models.js');                   //add for Mongo support
mongoose.connect('mongodb://localhost/test1');         //connect to Mongo

//import the routers
var index = require('./routes/index');
var api = require('./routes/api');
var authenticate = require('./routes/authenticate')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//Add this portion to your middleware section
app.use(session({
  secret: 'super duper secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//this line says that anything thats in the public folder, we'll just serve it as static
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

//register routers to root paths
app.use('/', index);
app.use('/api', api);
app.use('/auth', authenticate);

//// Initialize Passport
//this has to be done after the 
// app.use(passport.initialize());
// app.use(passport.session());
// or you might get an error
var initPassport = require('./passport-init');
initPassport(passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


//production error handler; no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
