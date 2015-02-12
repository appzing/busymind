var express = require('express'); //to build an express app
var http = require('http'); //to use rq and response
var path = require('path');  //to use path.join
var favicon = require('serve-favicon');
var app = express();  //create express app to use http varaibles
var bodyParser = require('body-parser'); //parse post data
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var methodOverride = require('method-override'); //to use patch and put in http
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname,'client')));

var mongoose = require('./config/mongoose.js');
var routes = require('./config/routes.js')(app);

app.set('port',4200);

app.listen(app.get('port'),function(){
	console.log('cool stuff on:' + app.get('port'));
})