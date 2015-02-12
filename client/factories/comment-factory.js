boardApp.factory('CommentFactory', function ($http){
	var comments = [];
	var factory ={};

	factory.getCommentInfo = function(id, callback){
		console.log("id in getCommentInfo",id);
		$http.post('/commentinfo_json', id).success(function (data){
			console.log("data", data);
			callback(data[0]);
		})
	}
	factory.addComment = function(info, callback){
		$http.post('/newComment_json', info).success(function (data){
			comments.push(data);
			console.log("in comment factory", data);
			callback(data);
		});
	}			
	return factory;
})