'use strict';

angular.
  module('portfolioApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when("/", {
          template : "<home></home>"
        })
        .
        otherwise({
            templateUrl : "views/404.htm"
          });
    }
  ]);
