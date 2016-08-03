"use strict";

app.controller('HomeCtrl', function($window, $q, $http, FirebaseUrl, $scope, AuthFactory, PostFactory){

	let currentUser = AuthFactory.getUser();

	$scope.openNewTab = function (someUrl) {
		console.log("yah")
		$window.open(someUrl);
	};

	PostFactory.getPostsFB(currentUser)
	.then(function(news){
		$scope.userPosts = news;
	});
});