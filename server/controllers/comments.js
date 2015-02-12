var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function(){
	return{
		create: function(req, res){
		 	User.findOne({_id: req.body.loggedUserId}, function(err, user){ //to push the post into the users array				
				 Post.findOne({_id: req.body._id }, function(err, post){
					var comment = new Comment({comment: req.body.comment,commenter:req.body.loggedUserName,_user:req.body.loggedUserId, _post:req.body._id });
					user.comments.push(comment);
					post.comments.push(comment);
					 comment.save(function(err){
						 post.save(function(err){
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

							res.send(JSON.stringify(comment));
						}

					})
				})
			})
		 },
		 show: function (req, res){
			// // do something with the req, res to return json data containing all users
			console.log("In comments show ",req.body);
			Comment.find(req.body)
			.populate('_user _post') //populates the field in the schema
			.exec(function(err, results){
				if(err){
				console.log(err);
				}
				res.send(JSON.stringify(results));				
			})	
		}
	}
})();