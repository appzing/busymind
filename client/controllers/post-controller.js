boardApp.controller('post-controller', function($scope, $location, $routeParams, TopicFactory, PostFactory, UserFactory, CommentFactory){
 	getTopicInfo();
 	getThePostbyTopicID();
 		
		
	$scope.postInfo = []; 
	$scope.commentInfo = [];
 
	$scope.logout = function(){
		localStorage.clear();
		$location.path('/');
	}
	//this function gets all the details of the topic based on the topic clicked.
	function getTopicInfo()
	{	var userid= {};
		var posts ={};
					
			PostFactory.getTopicInfo($routeParams, function (result){	
			if(result){
				$scope.topicInfo = result;
				//Adding the id of the user who posted the topic to an object to reuse the getClikeduser
				//method in userfactory
				userid.id = result._user; 
				//Reusing userfactory getclickeduser method to get the username of the user who posted the topic
				UserFactory.getClickedUser(userid, function (output){
					 $scope.topicInfo.username = output.username;
					 $scope.topicInfo.loggeduser=JSON.parse(localStorage.userinfo);	//adding the logged in users info to send while saving the post
				});
				 
			}
		})
	}		
	$scope.addPost = function(info){
		var postObjects = [];
		if(info.post == undefined || info.post == ''){
			$scope.errors = {error_message: "Fields cannot be blank"};
				return;
		}
		else{		
			PostFactory.addPost(info, function (output){
			getThePostbyTopicID();	
			});

		}	
	}
	function getThePostbyTopicID(){
		// $routeParams = topic id from url
		var comment_array = [];
		var com_array = [];
		var comment_obj = {};
		PostFactory.getPostInfo($routeParams, function(results){
			$scope.posts = results;
			for(var x in results){
				comment_array.push(results[x].comments);
				for(var y in results[x].comments){
				com_array.push(results[x].comments[y]);
				}
			}
			$scope.comments = com_array;
		})
	}
	$scope.addComment = function(commentdata, topicData){
		var comment = commentdata;
		comment.loggedUserId = topicData.loggeduser._id;
		comment.loggedUserName = topicData.loggeduser.username;
		if(commentdata.comment == undefined || commentdata.comment == ''){			
			$scope.errors = {error_message: "Comment cannot be blank"};
				return;
		}
		else{				
				CommentFactory.addComment(comment, function (output){
				$scope.showComment = false;	
				getThePostbyTopicID();

			});
			
		}	
	}
})