boardApp.factory('UserFactory', function ($http, $location){
	var users = [];
	var factory ={};
	var userinfo ;
	var errors;

	factory.loginUser = function(info){

		$http.post('/users_json', info).success(function (data){
			if(data[0] !== undefined){
			localStorage.userinfo = JSON.stringify(data[0]); // convert data to string for local storage
			$location.path('/dashboard');
			}
			else{
				localStorage.errors = "NotExists"
				$location.path('/login');
			}
		
		})
	}
	factory.addUser = function(info){
		$http.post('/users_json', info).success(function (data){
			if(data[0] !== undefined){
				//if email exists in database
				localStorage.errors = "Failure"

			}
			else{
				//if email does not exist in database
				$http.post('/newUser_json', info).success(function (data){
				users.push(data); //here data is an object
				localStorage.userinfo = JSON.stringify(data); // convert data to string for local storage
				$location.path('/dashboard');			
				})
			}		
		})
	}
	factory.getClickedUser = function(id, callback){
		$http.post('/clickeduser_json',id).success(function (data){
			callback(data[0]);
		})

	}		
	return factory;
})