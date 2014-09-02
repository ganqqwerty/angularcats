'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:templDirective
 * @description
 * # templDirective
 */
angular.module('directivesApp')
    .controller('BodyController', function($scope){
        $scope.textfield = {
            name:"abcd",
            label: "abcd",
            placeholder: "xyz",
            required: true
        };
        $scope.abc = {
            variable: 'hi'
        };
    })
    .directive('textInput', function() {
        return {
            scope: {
                details: '='
            },
            require: 'ngModel',
            restrict: 'E',
            template: '<input-display label="{{details.label}}" class="{{details.class}}" required="{{details.required}}">' +
                '<input type="text" name={{details.name}} placeholder="{{details.placeholder}}" ng-required="{{details.required}}"/>' +
                '</input-display>',
            link: function(scope, element, attrs, ngModel) {
                var input = angular.element(element[0].querySelector('input'));
                input.bind()
            }
        }

    })
    .directive('templdirective', function () {
        return {
            template: '<div> Preved mon!</div>',
            restrict: 'E'
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the templDirective directive');
//      }
        };
    })
    .directive('transcludedir', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'someparam' : '@',
                'someotherparam': '@',
                'outerparam': '='
            },
            template: '<h2>{{someparam}}</h2><div style="background-color: blue">' +
                ' plus some shit here <div style="background-color: darkcyan"' +
                ' ng-transclude=""></div>    </div>' +
                'And here is another param {{someotherparam}}' +
                '<p>outer param is heeeere: {{outerparam}}</p>'
        };
    })
    .directive('people', function() {
        return {
            restrict: 'E',
            template: ''

        }
    });

