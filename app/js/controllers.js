'use strict';

/* Controllers */

angular.module('howlandCornhole.controllers', [])
	.controller('HomeController', ['$scope', function($scope) {

  	}])
	.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
		var images = [];

		$http.get('data/images.json').
			success(function (data, status, headers, config) {
				console.log("Data: " + data);

				images = data.images;

				$scope.boardImages = images.filter(function (img) {
					return img.category == "Boards";
				});

				$scope.otherImages = images.filter(function (img) {
					return img.category == "Tables" || 
					img.category == "Trays";
				});
			}).
			error(function (data, status, headers, config) {
				console.error('Error: Status: ' + status);
			});		

  	}]);
