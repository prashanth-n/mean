var express = require('express');
var mongoose = require('mongoose')
var app = express();
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/adminApp')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var routes = require('./app/routes/admin.login.route')
//var actionROute = require('./app/models/admin.action.model')
routes(app)
//actionROute(app);
app.listen(1212);
