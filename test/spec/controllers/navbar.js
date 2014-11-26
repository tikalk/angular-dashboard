'use strict';

describe('Controller: TopnavCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDashboardApp'));

  var TopnavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopnavCtrl = $controller('TopnavCtrl', {
      $scope: scope
    });
  }));

  it('should check messages exists', function () {
    expect(scope.messages.length).toBeGreaterThan(0);
  });
});
