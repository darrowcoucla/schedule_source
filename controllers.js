'use strict';

/* Controllers */

var myAppModule = angular.module('myAppModule', []);
myAppModule.controller('myAppController', function($scope,$document,calculateService,$http,$window,$interpolate) {
  $scope.quantity=1;
  $scope.quantityResult = 0;
  $scope.myWelcome = 0;

  if( $window.option == "auto" ){
    $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source?work_loc='+$window.auto_work_loc;
  }

  $scope.calculateQuantity = function(work_loc) {
  $scope.work_loc = work_loc;

  // alert(work_loc);

   $scope.quantityResult = calculateService.calculate($scope.work_loc);
  };
});

// Service 
myAppModule.factory('calculateService', function($window,$http){
  return {
    calculate: function(work_loc){
      $window.location.href='https://www-test.library.ucla.edu/schedule_source?work_loc='+work_loc
//      $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source?work_loc='+work_loc
    }  
  };             
});

