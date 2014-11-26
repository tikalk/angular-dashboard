'use strict';

describe('Controller: MorrisCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDashboardApp'));

  var MorrisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MorrisCtrl = $controller('MorrisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
