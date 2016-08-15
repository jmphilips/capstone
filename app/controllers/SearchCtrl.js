"use strict";

app.controller('SearchCtrl', function($scope, PostFactory, SearchFactory, $window, AuthFactory, $location){

	$scope.openNewTab = function (someUrl) {
		$window.open(someUrl);
	};

	$scope.getSearchTerm = function(){
		SearchFactory.BingIt($scope.searchText)
		.then(function(news){
			$scope.headlines = news;		
		});
	};

	$scope.pressEnter = function(keyEvent) {
		if (keyEvent.which === 13) {
			$scope.getSearchTerm();
		};
	};

	$scope.postTemplate = {
		headline: "",
		linkUrl: "",
		thumbnail: "",
		uid: "",
		popular: 0,
		uuid: "",
		
	};

	$scope.addPost = function(storyObject){
		$scope.postTemplate.headline = storyObject.name;
		$scope.postTemplate.linkUrl = storyObject.url;
		$scope.postTemplate.thumbnail = storyObject.image.thumbnail.contentUrl;
		$scope.postTemplate.uid = AuthFactory.getUser();
		$scope.postTemplate.uuid = uuid.v4();

		PostFactory.postPostsFB($scope.postTemplate)
		.then(function(){
			$location.url('/home')
		})
	};

});