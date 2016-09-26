(function () {
  angular.module('myApp.applications-list').controller('AppsViewController', [
    '$scope', 'applicationsList',
    function ($scope, applicationsList) {
      $scope.applications = applicationsList;

      $scope.selectedApp = {};

      $scope.selectApplication = function(application) {
        $scope.selectedApp = application;
      };

      $scope.removeApplication = function (index) {
        $scope.applications.splice(index, 1);
      };
    }
  ]);
})();