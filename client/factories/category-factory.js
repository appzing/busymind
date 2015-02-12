boardApp.factory('CategoryFactory', function ($http){
	var categories = [];
	var factory = {};

	factory.getCategories = function(callback){
			$http.get('/categories_json').success(function (output){
				categories = output;
				callback(categories);

			});
	}
		
	factory.addCategory = function(info){
		$http.post('/newCategory_json', info).success(function (data){
			categories.push(data);
		});
	}		 
		
	return factory;
})