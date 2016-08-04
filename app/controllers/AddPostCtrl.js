"use strict";

app.controller('AddPostCtrl', function(FirebaseUrl, $scope, PostFactory, AuthFactory, $location){
	
	$scope.postTemplate = {
		headline: "",
		linkUrl: "",
		thumbnail: "",
		uid: ""
	};

	$scope.newPost = function(){

		$scope.postTemplate.uid = AuthFactory.getUser();
		PostFactory.postBoardFB($scope.postTemplate)
		.then(function(){
			
		})
	};

});