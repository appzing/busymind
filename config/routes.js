var users = require('./../server/controllers/users.js');
var topics = require('./../server/controllers/topics.js');
var posts = require('./../server/controllers/posts.js')
var comments = require('./../server/controllers/comments.js')
var categories = require('./../server/controllers/categories.js')

module.exports = function(app){
	app.post('/commentinfo_json', function (req, res){
		comments.show(req, res);
	})
	app.post('/newcomment_json', function (req, res){
		comments.create(req, res);
	})
	app.post('/postinfo_json', function (req, res){
		posts.show(req, res);
	})
	app.post('/newPost_json', function (req, res){
		posts.create(req, res);
	})
	app.post('/clickeduser_json', function (req, res){
		users.show_profile(req, res);
	})
	app.post('/topicinfo_json', function (req, res){
		topics.show_topic(req, res);
	})
	app.post('/users_json', function (req, res){
		users.show(req, res);
	})
	app.post('/newUser_json', function (req, res){
		users.create(req, res);
	})
	app.get('/topics_json', function (req, res){
		topics.show(req, res);
	})
	app.post('/newTopic_json', function (req, res){
		topics.create(req, res);
	})
	app.get('/categories_json', function (req, res){
		categories.show(req, res);
	})
	app.post('/newCategory_json', function (req, res){
		console.log('in routes', req);
		categories.create(req, res);
	})
	
}