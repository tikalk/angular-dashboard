'use strict';

describe('Service: Tables', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Tables;
  beforeEach(inject(function (_Tables_) {
    Tables = _Tables_;
  }));

  it('should do something', function () {
    expect(!!Tables).toBe(true);
  });

});
