//require mongoose from node_modules
var mongoose = require('mongoose');
// require file-system so that we can read and load all the model files we create

var fs = require('fs');//read and write to files

var connect = function() {
	//specify options when mongoose connects to mongodb
	var options = { server: { socketOptons: {keepAlive: 1}}}
	//connect to our mongodb database server with options specified above
	//mongoose.connect('mongodb://busymind.herokuapp.com/boardApp', options)
	mongoose.connect('mongodb://heroku_app33914762:u3fiujrmlksiirg0h8jrtpts0e@ds045031.mongolab.com:45031/heroku_app33914762', options);
	//mongoose.connect('mongodb://localhost/boardApp', options);
}
//actually connect to the database "DONT FORGET THIS"
connect();
//if there is an error while connecting lets console log it

mongoose.connection.on('error', function(err){
	console.log(err);
})
// if we get disconnected from mongoose try to connect again
mongoose.connection.on('disconnect', function(){
	connect();
})

// specify the path to all of the models
var models_path = __dirname + '/../server/models'
// read all of the files in that path and for each one if the file is a javascript file lets require it
fs.readdirSync(models_path).forEach(function(file){
	if(~file.indexOf('.js')){
		require(models_path + '/' + file);
	}
})