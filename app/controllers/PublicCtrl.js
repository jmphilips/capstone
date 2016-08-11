"use strict";

app.controller('PublicCtrl', function($scope, PostFactory, $window, AuthFactory){

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

		let userId = AuthFactory.getUser();

		let updatedVoters;

		PostFactory.voteChecker(post.uuid)
		.then(function(objectArray){
			
			objectArray.voters.push(userId)
			updatedVoters = objectArray.voters;
			console.log(updatedVoters)
		


		post.popular += 1;
		var updatesObj = {	
			popular: post.popular,
			voters: updatedVoters
		};

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

		});

	};

	$scope.minusOne = function(post) {

		let userId = AuthFactory.getUser();
		let updatedVoters;

		PostFactory.voteChecker(post.uuid)
		.then(function(objectArray){
			objectArray.voters.push(userId)
			updatedVoters = objectArray.voters;
		

		post.popular -= 1;
		var updatesObj = {
			popular: post.popular,
			voters: updatedVoters
		};


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

		});

	};

	$scope.hasVoted = function(array) {

		let userId = AuthFactory.getUser();
		let voted = false;
		
		if (array != undefined) {
			for (var i = 0; i < array.length; i++) {
			if (array[i] == userId) {
				voted = true; 
			} 
		}

		};

		
		return voted;
	};

})