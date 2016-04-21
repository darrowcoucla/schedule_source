'use strict';

/* Controllers */

var myAppModule = angular.module('myAppModule', []);
myAppModule.controller('myAppController', function($scope,calculateService,$http,$window) {
  $scope.quantity=1;
  $scope.quantityResult = 0;
  $scope.myWelcome = 0;
  
  $scope.calculateQuantity = function() {

   $scope.quantityResult = calculateService.calculate($scope.quantity, 10, $scope.myWelcome);
  };
});

// Service 
myAppModule.factory('calculateService', function($window,$http){
  return {
    calculate: function(xval,yval,ip){
//      $window.location.href='https://www-test.library.ucla.edu/schedule_source'
      $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source'
    }  
  };             
});

