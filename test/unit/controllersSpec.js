'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('howlandCornhole.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var homeCtrl = $controller('HomeController', { $scope: {} });
    expect(homeCtrl).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var galleryCtrl = $controller('GalleryController', { $scope: {} });
    expect(galleryCtrl).toBeDefined();
  }));
});
