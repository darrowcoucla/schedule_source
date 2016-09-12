'use strict';

/* Controllers */

var scheduleAppModule = angular.module('scheduleAppModule', []);
scheduleAppModule.controller('scheduleAppController', function($scope,$document,moduleService,$http,$window,$interpolate) {
  $scope.quantity=1;
  $scope.quantityResult = 0;
  $scope.myWelcome = 0;

  if( $window.option == "auto" ){
    $window.location.href='https://www.library.ucla.edu/schedule_source?work_loc='+work_loc
//    $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source?work_loc='+$window.auto_work_loc;
  }

  $scope.deptUsed = function(work_loc) {
  $scope.work_loc = work_loc;
   $scope.quantityResult = moduleService.redirect($scope.work_loc);
  };
});

// Service 
scheduleAppModule.factory('moduleService', function($window,$http){
  return {
    redirect: function(work_loc){
      $window.location.href='https://www.library.ucla.edu/schedule_source?work_loc='+work_loc
//      $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source?work_loc='+work_loc
    }  
  };             
});

