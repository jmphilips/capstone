"use strict";

app.controller('PublicCtrl', function($scope, PostFactory){

	PostFactory.getPublicPosts()
	.then(function(news){
		$scope.publicPosts = news;
	});

})