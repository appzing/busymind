var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		show: function (req, res){
			// do something with the req, res to return json data containing all users
			Topic.find({})
				.populate('_user') //populates the field in the schema
				.exec(function(err, results){
					if(err){
					console.log(err);
					}
					res.send(JSON.stringify(results));				
			})	

		},
		show_topic: function (req, res){
			// do something with the req, res to return json data containing all users
			// Topic.find({_id: req.params.id}, function(err, result){
			Topic.find({_id: req.body.id}, function(err, result){
				if(err){
					console.log(err);
				}else{
					res.send(JSON.stringify(result));
				}
				
			})
		},
		
		create: function (req, res){
			User.findOne({_id: req.body._user}, function(err, user){
				var topic = new Topic(req.body);
				user.topics.push(topic);
				topic.save(function(err){
					user.save(function(err){
						if(err){
							console.log(err);
						}
						else{
							res.end();
						}
					})
					if(err){
							console.log(err);
						}
						else{
							res.json(topic);
						}

				})
			})
			
		}
	}
})();