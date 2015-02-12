boardApp.controller('user-controller', function($scope, $routeParams, UserFactory){
	errors();
	
	if($routeParams){
	getClickedUser();
	}
	function errors(){
		if(localStorage.errors == 'NotExists'){
		 		$scope.errors = {error_message: "User does not exist" };
		 		localStorage.clear();
		 		return;
		 	}
	}
	$scope.getUserInfo = function(){
		UserFactory.loginUser($scope.curr_user);

	}
	$scope.addUser= function(){
		if($scope.new_user.username == undefined || 
			$scope.new_user.username == '' || 
			$scope.new_user.email == undefined || 
			$scope.new_user.email == '' || 
			$scope.new_user.password == undefined || 
			$scope.new_user.password == '' || 
			$scope.new_user.password_confirm == undefined || 
			$scope.new_user.password_confirm == '' ){
			$scope.errors = {error_message: "Fields cannot be blank"};
				return;
		}
		else if($scope.new_user.password != $scope.new_user.password_confirm){
			$scope.errors = {error_message: "Password and confirm password must match"};
				return;	
		}
		else{
		 	UserFactory.addUser($scope.new_user);
		 	if(localStorage.errors == 'Failure'){
		 		$scope.errors = {error_message: "User exists in database.Use different email" };
		 		return;
		 	}
		 	
		}			
	}
	function getClickedUser(){
		UserFactory.getClickedUser($routeParams, function(result){
			 
			 console.log("Result is",result);
			$scope.profile = result;
		});
	}
	$scope.logout = function(){
		localStorage.clear();
		$location.path('/');
	}
})