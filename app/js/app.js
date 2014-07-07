'use strict';


// Declare app level module which depends on filters, and services
angular.module('howlandCornhole', [
  'ngRoute',
  'akoenig.deckgrid',
  'angular-flexslider',
  'howlandCornhole.filters',
  'howlandCornhole.services',
  'howlandCornhole.directives',
  'howlandCornhole.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/boardGallery', {templateUrl: 'partials/boardGallery.html', controller: 'GalleryController'});
  $routeProvider.when('/otherGallery', {templateUrl: 'partials/otherGallery.html', controller: 'GalleryController'});
  $routeProvider.when('/data/images.json', '/data/images.json');
  $routeProvider.otherwise({redirectTo: '/'});
}]);
