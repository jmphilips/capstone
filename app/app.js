"use strict";



const app = angular.module("ReadIt", ['ngRoute'])
.constant('FirebaseUrl', 'https://reddit-e2195.firebaseio.com');

app.config(function($routeProvider, FBCreds){

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	};
	
	firebase.initializeApp(authConfig);

	$routeProvider.
	when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LogInCtrl'	
	})
	.otherwise('/login');

});


			

