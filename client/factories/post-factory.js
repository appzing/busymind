boardApp.factory('PostFactory', function ($http){
	var posts = [];
	var factory ={};

	factory.getTopicInfo = function(id, callback){
		$http.post('/topicinfo_json', id).success(function (data){
			callback(data[0]);
		})
	}
	factory.getPostInfo = function(id, callback){	
		$http.post('/postinfo_json', id).success(function (data){
			callback(data);
		})
	}
	factory.addPost = function(info, callback){
		$http.post('/newPost_json', info).success(function (data){
			posts.push(data);
			callback(data);
		});
	}
			
	return factory;
})