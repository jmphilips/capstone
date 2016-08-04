"use strict";

app.controller('PublicCtrl', function($scope, PostFactory, $window){

	$scope.openNewTab = function (someUrl) {
		$window.open(someUrl);
	};

	PostFactory.getPublicPosts()
	.then(function(news){
		news.sort(function(a, b){
			return b.popular - a.popular
		})
		$scope.publicPosts = news;
	});

	$scope.plusOne = function(post) {
		post.popular += 1;
		var updatesObj = {popular: post.popular};
		PostFactory.patchPostFB(post.uuid, updatesObj)
		.then(function(){
				PostFactory.getPublicPosts()
					.then(function(news){
					news.sort(function(a, b){
					return b.popular - a.popular
			})
		$scope.publicPosts = news;
	});
		})
	};

	$scope.minusOne = function(post) {
		post.popular -= 1;
		var updatesObj = {popular: post.popular};
		PostFactory.patchPostFB(post.uuid, updatesObj)
		.then(function(){
			PostFactory.getPublicPosts()
				.then(function(news){
				news.sort(function(a, b){
				return b.popular - a.popular
		})
		$scope.publicPosts = news;
			});
		})
	};

})