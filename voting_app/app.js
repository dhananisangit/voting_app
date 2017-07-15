/* Middleware Config */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Defined REST API endpoints
app.use('/', index);
app.use('/v1/getlist', index)
app.use('/v1/login', index)
app.use('/v1/fetchvotes', index)
app.use('/v1/vote', index)


module.exports = app;
