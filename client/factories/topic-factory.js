boardApp.factory('TopicFactory', function ($http){
	var topics = [];
	var factory = {};

	factory.getTopics = function(callback){
		$http.get('/topics_json').success(function (output){
			topics = output;
			callback(topics);

		});
	}
	factory.addTopic = function(info){
		$http.post('/newTopic_json', info).success(function (data){
			topics.push(data);
		});
		 }	
	
	return factory;
})