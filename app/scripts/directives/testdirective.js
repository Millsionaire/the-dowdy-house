'use strict';

/**
 * @ngdoc directive
 * @name theDowdyHouseApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('theDowdyHouseApp')
  .directive('testDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
      }
    };
  });
