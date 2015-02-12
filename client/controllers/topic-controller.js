boardApp.controller('topic-controller', function($scope, $location, $routeParams, TopicFactory, PostFactory, UserFactory, CategoryFactory){
	updateTopics();	
	updateCategories();
	$scope.logout = function(){
		localStorage.clear();
		$location.path('/');
	}
	function updateTopics(){
		//if is required 
		 	if(localStorage.userinfo){
			$scope.userinfo = JSON.parse(localStorage.userinfo);// converting string to object
			}
		TopicFactory.getTopics(function (output) {
			$scope.topics = output
		});			
	}

	function updateCategories(){
		if(localStorage.userinfo){
			$scope.userinfo = JSON.parse(localStorage.userinfo);// converting string to object
			}
		CategoryFactory.getCategories(function (output) {
			$scope.categories = output;
		});			
	}
	$scope.addTopic = function(id){
		if($scope.new_topic.topic == undefined || $scope.new_topic.topic == '' ||
			$scope.new_topic.description == undefined || $scope.new_topic.description == '' ||
			$scope.new_topic.category == undefined || $scope.new_topic.category == '' ){
			$scope.errors = {error_message: "Fields cannot be blank"};
				return;
		}
		else{
			var _user;
			$scope.new_topic._user = id;	
			TopicFactory.addTopic($scope.new_topic);
			 updateTopics();

		}	
	}	
	$scope.addCategory = function(data){
		if($scope.new_category.text == undefined || $scope.new_category.text == ''){
			$scope.errors = {error_message: "Fields cannot be blank"};
				return;
		}
		else{

			CategoryFactory.addCategory(data);
			 updateCategories();
			 $scope.showCategory = false;

		}	
	}	
})