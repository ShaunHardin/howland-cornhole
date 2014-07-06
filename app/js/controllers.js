'use strict';

/* Controllers */

angular.module('howlandCornhole.controllers', [])
	.controller('HomeController', ['$scope', function($scope) {

  	}])
	.controller('GalleryController', ['$scope', function($scope) {
		$scope.images =  [
				{category: "Boards", name: "Stained Block O", src: "/app/img/blockO.png"},
				{category: "Boards", name: "Soccer Ball", src: "/app/img/soccerBall.png"},
				{category: "Boards", name: "Harley Logo", src: "/app/img/harley2.png"},
				{category: "Boards", name: "OSU Triangle Pair", src: "/app/img/osuTriangle.png"},
				{category: "Boards", name: "Dual Harley Logos", src: "/app/img/harley.png"},
				{category: "Boards", name: "Freedom Logo", src: "/app/img/freedom.png"},
				{category: "Boards", name: "Corona Logo", src: "/app/img/corona1.png"},
				{category: "Boards", name: "Browns Mixed Logo", src: "/app/img/brownsMixed.png"},
				{category: "Boards", name: "Pella Custom", src: "/app/img/pella.png"},
				{category: "Boards", name: "Brutus OSU", src: "/app/img/brutusStriped.png"},
				{category: "Boards", name: "Single OSU Triangle", src: "/app/img/osuSingleTriangle.png"},
				{category: "Boards", name: "Browns Logo", src: "/app/img/brownsHelmet.png"},
				{category: "Tables", name: "Brutus Table", src: "/app/img/brutusTable.png"},
				{category: "Boards", name: "Badger Logo", src: "/app/img/badger.png"},
				{category: "Boards", name: "Batman Logo", src: "/app/img/batman.png"},
				{category: "Tables", name: "BG Table", src: "/app/img/bgtable.png"},
				{category: "Boards", name: "Orange and Black Triangle", src: "/app/img/black.png"},
				{category: "Boards", name: "Broncos Logo", src: "/app/img/broncos.png"},
				{category: "Boards", name: "Browns Dawg Logo", src: "/app/img/brownsDawg.png"},
				{category: "Boards", name: "Browns Elf Logo", src: "/app/img/brownsElf.png"},
				{category: "Boards", name: "Browns Diagonal Logo", src: "/app/img/brownsDiag.png"},
				{category: "Tables", name: "Browns Table", src: "/app/img/brownsTable.png"},
				{category: "Trays", name: "Brutus Tray", src: "/app/img/brutusTray.png"},
				{category: "Tables", name: "Buckeye Table", src: "/app/img/buckeyeTable.png"},
				{category: "Trays", name: "Buckeye Tray", src: "/app/img/buckeyeTray.png"},
				{category: "Boards", name: "Brutus Red", src: "/app/img/bucks.png"},
				{category: "Boards", name: "Buckeye Triangle", src: "/app/img/buckTri.png"},
				{category: "Boards", name: "CAT Logo", src: "/app/img/cat.png"},
				{category: "Boards", name: "Cavs Logo", src: "/app/img/cavs.png"},
				{category: "Boards", name: "Chevy Logo", src: "/app/img/chevy.png"},
				{category: "Boards", name: "Cortview Village Logo", src: "/app/img/cortview.png"},
				{category: "Tables", name: "Browns Dawg Table", src: "/app/img/dogTable.png"},
				{category: "Boards", name: "Panther Logo", src: "/app/img/dualpanther.png"},
				{category: "Boards", name: "Dual Harley Logo", src: "/app/img/dualHarley.png"},
				{category: "Boards", name: "Howland Logo", src: "/app/img/howland.png"},
				{category: "Boards", name: "Indians Logo", src: "/app/img/indians.png"},
				{category: "Boards", name: "Infinity Logo", src: "/app/img/infinity.png"},
				{category: "Boards", name: "Edward Jones Logo", src: "/app/img/invest.png"},
				{category: "Boards", name: "Italian Flag", src: "/app/img/italy.png"},
				{category: "Trays", name: "Margaritaville Tray", src: "/app/img/jimmybu.png"},
				{category: "Boards", name: "Mark Thomas Logo", src: "/app/img/mark.png"},
				{category: "Boards", name: "Mercy Logo", src: "/app/img/mercy.png"},
				{category: "Tables", name: "Redhawks Logo", src: "/app/img/miamiTable.png"},
				{category: "Boards", name: "Miller Lite Logo", src: "/app/img/miller.png"},
				{category: "Trays", name: "Various Trays", src: "/app/img/miscTrays.png"},
				{category: "Boards", name: "Ohio State Logo Gray", src: "/app/img/ohiostate.png"},
				{category: "Boards", name: "Orange Triangle", src: "/app/img/orange.png"},
				{category: "Boards", name: "Raiders Logo", src: "/app/img/raiders.png"},
				{category: "Boards", name: "Red Panther Logo", src: "/app/img/redpanther.png"},
				{category: "Boards", name: "Richards Logo", src: "/app/img/richard.png"},
				{category: "Boards", name: "Mariners Logo", src: "/app/img/seattle.png"},
				{category: "Boards", name: "Steelers Logo", src: "/app/img/steelers.png"},
				{category: "Boards", name: "Dual Steelers Logo", src: "/app/img/steelersTri.png"},
				{category: "Boards", name: "Ursuline Logo", src: "/app/img/urshs.png"},
				{category: "Boards", name: "WWE Logo", src: "/app/img/w.png"},
				{category: "Boards", name: "White OSU Triangle", src: "/app/img/whiteOSUtri.png"},
				{category: "Boards", name: "Yankees Logo", src: "/app/img/yankStripes.png"},
				{category: "Boards", name: "YSU Logo", src: "/app/img/ysu.png"}
		];

		$scope.boardImages = $scope.images.filter(function (img) {
			return img.category == "Boards";
		});

		$scope.otherImages = $scope.images.filter(function (img) {
			return img.category == "Tables" || 
			img.category == "Trays";
		});

  	}]);
