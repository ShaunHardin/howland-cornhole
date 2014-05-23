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
      //spec body
      expect(ctrl).toBeDefined();
    });

  });

  describe('GalleryController', function() {
    var scope, ctrl;

    beforeEach(module('howlandCornhole.controllers'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('GalleryController', {$scope:scope});
    }));

    it('should be defined', function() {
      //spec body
      expect(ctrl).toBeDefined();
    });

    it('should have image data', function() {
      expect(scope.images.length).toBe(2);
    });

  });

});
