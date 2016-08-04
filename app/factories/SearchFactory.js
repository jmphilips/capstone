"use strict";

app.factory('SearchFactory', function($q, $http, BingCreds){

	let BingIt = function(searchTerm){

		let BingApi = BingCreds.apiKey;
		let newsObject;

		let searchString = `https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=${searchTerm}&count=10&offset=0&mkt=en-us&safeSearch=Moderate`;

		return $q(function(resolve, reject) {
			$http({
				method: "GET",
				url: searchString,
				headers: {
					'Ocp-Apim-Subscription-Key': BingApi
				}
			})
			.success(function(newsObj) {
				newsObject = newsObj.value;
				resolve(newsObject);
				console.log(newsObject)
			});
		})
		.catch(function(error){
			reject(error);
		});
	};


	return {BingIt};
});
