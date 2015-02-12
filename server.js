var express = require('express'); //to build an express app
var http = require('http'); //to use rq and response
var path = require('path');  //to use path.join
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); //parse post data

var app = express();  //create express app to use http varaibles

app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 4000)

var methodOverride = require('method-override'); //to use patch and put in http
app.use(methodOverride('X-HTTP-Method-Override'));


var mongoose = require('./config/mongoose.js');
var routes = require('./config/routes.js')(app);

//app.set('port',4200);

app.listen(app.get('port'),function(){
	console.log('cool stuff on:' + app.get('port'));
})