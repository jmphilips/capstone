"use strict";

app.factory("PostFactory", function($q, $http, FirebaseUrl){

	const postPostsFB = function (newPost){
		return $q(function(resolve, reject){
			$http.post(`${FirebaseUrl}/posts.json`,
			JSON.stringify(newPost))
			.success(function(){
				resolve()
			})
			.error(function(error){
				reject(error)
			});
		})
	};

	const getPostsFB = function (userId){
		let userPosts;
		return $q(function(resolve, reject){
			$http.get(`${FirebaseUrl}/posts.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(anObject){
				userPosts = anObject;
				resolve(userPosts)
			})
			.error(function(error){
				reject(error);
			})
		});
	};

	const getPublicPosts = function(){
		let publicPosts;
		return $q(function(resolve, reject){
			$http.get(`${FirebaseUrl}/posts.json`)
			.success(function(anObject){
				publicPosts = anObject;
				resolve(publicPosts)
			})
			.error(function(error){
				reject(error);
			})
		});
	};


	return {postPostsFB, getPostsFB, getPublicPosts}
});