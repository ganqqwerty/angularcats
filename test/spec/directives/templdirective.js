'use strict';

describe('Directive: templDirective', function () {

  // load the directive's module
  beforeEach(module('directivesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<templ-directive></templ-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the templDirective directive');
  }));
});
