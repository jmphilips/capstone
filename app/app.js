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
	}).
	when('/search', {
		templateUrl: 'partials/search.html',
		controller: 'SearchCtrl'
	}).
	when('/add', {
		templateUrl: 'partials/add-post.html',
		controller: 'AddPostCtrl'
	}).
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	when('/public', {
		templateUrl: 'partials/public.html',
		controller: 'PublicCtrl'
	})
	.otherwise('/login');
});


			

