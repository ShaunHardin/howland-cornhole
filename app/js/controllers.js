'use strict';

/* Controllers */

angular.module('howlandCornhole.controllers', [])
	.controller('HomeController', ['$scope', function($scope) {

  	}])
	.controller('GalleryController', ['$scope', function($scope) {
		$scope.images =  [
				{name: "Stained Block O", src: "/app/img/blockO.png"},
				{name: "Soccer Ball", src: "/app/img/soccerBall.png"},
				{name: "Harley Logo", src: "/app/img/harley2.png"},
				{name: "OSU Triangle Pair", src: "/app/img/osuTriangle.png"},
				{name: "Dual Harley Logos", src: "/app/img/harley.png"},
				{name: "Freedom Logo", src: "/app/img/freedom.png"},
				{name: "Corona Logo", src: "/app/img/corona1.png"},
				{name: "Browns Mixed Logo", src: "/app/img/brownsMixed.png"},
				{name: "Pella Custom", src: "/app/img/pella.png"},
				{name: "Brutus OSU", src: "/app/img/brutusStriped.png"},
				{name: "Single OSU Triangle", src: "/app/img/osuSingleTriangle.png"},
				{name: "Browns Logo", src: "/app/img/brownsHelmet.png"}
		];

  	}]);
