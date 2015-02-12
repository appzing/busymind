var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
module.exports = (function(){
	return {		
		create: function (req, res){
			User.findOne({_id: req.body.loggeduser._id}, function(err, user){ //to push the post into the users array
				Topic.findOne({_id: req.body._id}, function(err, topic){ 
					var post = new Post({post: req.body.post, _user:req.body.loggeduser._id, _topic:req.body._id });
					user.posts.push(post);
					topic.posts.push(post); //pusing posts to topic array
					post.save(function(err){
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
								res.end();
							}
						})
						if(err){
								console.log(err);
							}
						else{
							res.send(JSON.stringify(post));
						}

					})
				})
			})
		},
		show: function (req, res){
			// // do something with the req, res to return json data containing all users
			// Post.find({_id:req.body._id})
			Post.find({_topic:req.body.id})
			.populate('_user') 
			.populate('comments')//populates the field in the schema
			.exec(function(err, results){
				if(err){
				console.log(err);
				}
				res.send(JSON.stringify(results));				
			})	
		},
	}
})();