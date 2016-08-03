"use strict";

app.controller("LogInCtrl", function($scope, $location, AuthFactory){

	$scope.login = function() {
		AuthFactory.authWithProvider()
		.then(function(result) {
			$location.path("/home");
			$scope.$apply();
		})
	};
});