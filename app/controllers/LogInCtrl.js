"use strict";

app.controller("LogInCtrl", function($scop, $location, AuthFactory){

	$scope.login = function() {
		AuthFactory.authWithProvider()
		.then(function(result) {
			$location.path("/home");
			$scope.$apply();
		})
	};

})