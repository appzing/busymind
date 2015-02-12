var mongoose = require('mongoose');
var User = mongoose.model('User')


module.exports = (function(){
	return {
		show_profile: function (req, res){
			// do something with the req, res to return json data containing all users
			if(req.body.id){
				User.find({_id: req.body.id}, function(err, result){
					if(err){
						console.log(err);
					}else{
						res.send(JSON.stringify(result));
					}
					
				})
			}
		},
		show: function (req, res){
			// do something with the req, res to return json data containing all users
			if(req.body.email){
				User.find({email: req.body.email}, function(err, result){
					if(err){
						console.log(err);
					}else{
						res.send(JSON.stringify(result));
					}
					
				})
			}	
		},
		create: function (req, res){
			var user = new User(req.body);
			user.save( function(err){
				if(err){
					console.log(err);
				}else{
					res.send(JSON.stringify(user));
					
				}

			})
		}
	}
})();