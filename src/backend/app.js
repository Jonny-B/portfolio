const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var path = require('path');

const app = express();

const HtmlWebpackPlugin = require('html-webpack-plugin');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO This could be done recursivly so it doesn't have to be defined for each app.
app.use(express.static(path.join(__dirname,'./builds')))

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'builds', 'portfolio')})
});

app.get('/galaxySim', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'builds', 'galaxy-sim')})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
