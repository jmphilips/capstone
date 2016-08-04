"use strict";

app.controller('NavCtrl', function($scope, $location){

	$scope.logout = function() {
		console.log("hi")
		firebase.auth().signOut()
		.then(function () {
			$location.url("/login")
			$scope.$apply();
		});
	};

	$scope.searchButton = function() {
		$location.url("/search")
	};

	$scope.publicButton = function() {
		$location.url("/public");
	};

	$scope.homeButton = function() {
		$location.url("/home")
	};

	$scope.isLoggedIn = function() {
		return ($location.url() === "/login")
	};

});