'use strict';

/* Controllers */

angular.module('howlandCornhole.controllers', [])
	.controller('HomeController', ['$scope', function($scope) {

  	}])
	.controller('GalleryController', ['$scope', function($scope) {
		$scope.images =  [
				{name: "Stained Block O", src: "/app/img/blockO.png"},
				{name: "Soccer Ball", src: "/app/img/soccerBall.png"},
				{name: "Pella Custom", src: "/app/img/pella.png"},
				{name: "Single OSU Triangle", src: "/app/img/osuSingleTriangle.png"},
				{name: "OSU Triangle Pair", src: "/app/img/osuTriangle.png"}
			];

  	}]);
