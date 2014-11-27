'use strict';

describe('Service: Topnavbar', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Topnavbar;
  beforeEach(inject(function (_Topnavbar_) {
    Topnavbar = _Topnavbar_;
  }));

  it('should do something', function () {
    expect(!!Topnavbar).toBe(true);
  });

});
