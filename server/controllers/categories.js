var mongoose = require('mongoose');
var Category = mongoose.model('Category');
module.exports = (function(){
	return {
		
		show: function (req, res){
			// do something with the req, res to return json data containing all users			
				Category.find({}, function(err, result){
					if(err){
						console.log(err);
					}else{
						res.send(JSON.stringify(result));
					}
					
				})				
		},
		create: function (req, res){
			var category = new Category({category:req.body.text});
			category.save( function(err){
				if(err){
					console.log(err);
				}else{
					res.send(JSON.stringify(category));
					
				}

			})
		}
	}
})();