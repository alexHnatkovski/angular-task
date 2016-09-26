(function () {
  'use strict';

  angular.module('myApp.application').directive('appItem', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/application/application.view.html',
      scope: {
        config: '=',
        removeItem: '&'
      }
    }
  });
})();