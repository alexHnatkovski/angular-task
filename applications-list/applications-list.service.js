(function () {
  'use strict';

  angular.module('myApp.applications-list').factory('applicationsListResource', function ($http) {

    function getApplicationsList(url, options) {
      var requestURL = url || 'mocks/apps.json';

      return $http.get(requestURL, options).then(function(response){
        return response.data || [];
      });
    }

    return {
      getApplicationsList: getApplicationsList
    };
  });
})();