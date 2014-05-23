'use strict';


// Declare app level module which depends on filters, and services
angular.module('howlandCornhole', [
  'ngRoute',
  'howlandCornhole.filters',
  'howlandCornhole.services',
  'howlandCornhole.directives',
  'howlandCornhole.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
