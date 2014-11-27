'use strict';

describe('Service: Flot', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Flot;
  beforeEach(inject(function (_Flot_) {
    Flot = _Flot_;
  }));

  it('should do something', function () {
    expect(!!Flot).toBe(true);
  });

});
