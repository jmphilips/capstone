"use strict";

app.factory("PostFactory", function($q, $http, FirebaseUrl){

	const postPostsFB = function (newPost){
		return $q(function(resolve, reject){
			$http.put(`${FirebaseUrl}/posts/${newPost.uuid}.json`,
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
		let publicPostsArray = [];
		return $q(function(resolve, reject){
			$http.get(`${FirebaseUrl}/posts.json`)
			.success(function(anObject){
				publicPosts = anObject;
				Object.keys(publicPosts).forEach(function(key){
					publicPostsArray.push(publicPosts[key])
				})
				resolve(publicPostsArray)
			})
			.error(function(error){
				reject(error);
			})
		});
	};

	const deletePostsFB = function(uniqeId){
		return $q(function(resolve, reject){
			$http.delete(`${FirebaseUrl}/posts/${uniqeId}.json`)
			.success(function(){
				resolve();
			})
			.error(function(error){
				reject(error);
			})
		})
	};

	const patchPostFB = function(uniqueId, data) {
		return $q(function(resolve, reject){
			$http.patch(`${FirebaseUrl}/posts/${uniqueId}.json`, data)
			.success(function(patches){
				resolve(patches);
			})
			.error(function(error){
				reject(error)
			})
		})
	};

	const getSpecPostFB = function(uniqueId){
		return $q(function(resolve,reject){
			$http.get(`${FirebaseUrl}/posts/${uniqueId}.json`)
			.success(function(specPostObject){
				resolve(specPostObject);
			})
			.error(function(error){
				reject(error)
			})
		})
	};

	const voteChecker = function(uniqueId) {
		let voterArray;
		return $q(function(resolve, reject) {
			getSpecPostFB(uniqueId)
			.then(function(posted) {
				if (posted.voters) {
					voterArray = {voters: posted.voters};
					resolve(voterArray)
				} else {
					voterArray = {voters: []}
					resolve(voterArray)
				}
			})
			
		});
	};





	return {postPostsFB, getPostsFB, getPublicPosts, deletePostsFB, patchPostFB, getSpecPostFB, voteChecker}
});