'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  

  describe('HomeController', function() {
    var scope, ctrl;

    beforeEach(module('howlandCornhole.controllers'));
    
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('HomeController', {$scope:scope});
    }));

    it('should be defined', function() {
      expect(ctrl).toBeDefined();
    });

  });

  describe('GalleryController', function() {
    var scope, ctrl;

    beforeEach(module('howlandCornhole.controllers'));

    var httpBackend;
    beforeEach(inject(function($rootScope, $controller, $httpBackend, $http) {
      scope = $rootScope.$new();

      // set up mock response for request to fetch images.json data
      httpBackend = $httpBackend;
      httpBackend.when("GET", "data/images.json").respond(
        { "images": 
          [
            {"category": "Boards", "name": "Test Board", "src": "/app/img/blockO.png"},
            {"category": "Boards", "name": "Test Board2", "src": "/app/img/blockO2.png"},
            {"category": "Boards", "name": "Test Board3", "src": "/app/img/blockO3.png"},
            {"category": "Trays", "name": "Test Tray", "src": "/app/img/soccerBall.png"},
            {"category": "Tables", "name": "Test Table", "src": "/app/img/harley2.png"}
          ]
        }
      );

      ctrl = $controller('GalleryController', {$scope:scope, $http:$http});
    }));

    it('should be defined', function() {
      expect(ctrl).toBeDefined();
    });

    it('should have the correct number of board images', function() {
      httpBackend.flush();
      expect(scope.boardImages.length).toBe(3);
    });

    it('should have the correct number of other images', function() {
      httpBackend.flush();
      expect(scope.otherImages.length).toBe(2);
    });

  });

});
