'use strict';

/**
 * @ngdoc function
 * @name directivesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directivesApp
 */
angular.module('directivesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
