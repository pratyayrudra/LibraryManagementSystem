var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var logger = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:abcd1234@ds021943.mlab.com:21943/library', function(){
    console.log('Connected Successfully to database');
});

app.use(require('./routes/api'));


var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Server Started on '+ port);
});