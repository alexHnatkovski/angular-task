(function () {
  'use strict';

  angular.module('myApp.applications-list').config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'applications-list/applications-list.view.html',
        controller: 'AppsViewController',
        resolve: {
          applicationsList: function(applicationsListResource) {
            return applicationsListResource.getApplicationsList()
          }
        }
      });
    }
  ]);
})();