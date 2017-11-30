var express = require('express');
var mongoose = require('mongoose')
var app = express();
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/adminApp');
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./app/models/admin.login.model')
routes(app)
app.listen(1234);
