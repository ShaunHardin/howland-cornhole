'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var $scope, $compile;

  beforeEach(module('howlandCornhole.directives'));
  // module(function($provide) {
  //   $provide.value('version', 'TEST_VER');
  // });
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  // describe('app-version', function() {
  //   it('should print current version', function() {
  //     // module(function($provide) {
  //     //   $provide.value('version', 'TEST_VER');
  //     // });

  //     var element = $compile('<span app-version></span>')($scope);
  //     expect(element.text()).toEqual('TEST_VER');
  //   });
  // });

});
