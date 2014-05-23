'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/');
    });


    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for the home view/);
    });

  });


  describe('gallery', function() {

    beforeEach(function() {
      browser.get('index.html#/gallery');
    });


    it('should render gallery when user navigates to /gallery', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for the gallery/);
    });

  });
});
