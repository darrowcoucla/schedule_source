'use strict';

/* Controllers */

var scheduleAppModule = angular.module('scheduleAppModule', []);
scheduleAppModule.controller('scheduleAppController', function($scope,$document,moduleService,$http,$window,$interpolate) {
  $scope.quantity=1;
  $scope.quantityResult = 0;
  $scope.myWelcome = 0;

  if( $window.option == "auto" ){
      var url_dept ='https://www.library.ucla.edu/schedule_source?work_loc='+$window.auto_work_loc;
      var ppp = $window.open(url_dept, "_blank", "width=600,height=400,left=10,top=150");
      setTimeout(function(){
        ppp.close();
      },30000);
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
      var url_dept ='https://www.library.ucla.edu/schedule_source?work_loc='+work_loc;
      var ppp = $window.open(url_dept, "_blank", "width=750,height=800,left=10,top=150");
      setTimeout(function(){
        ppp.close();
      },30000);

//      $window.location.href='http://uclalib.local/UCLALIB/www/schedule_source?work_loc='+work_loc
    }  
  };             
});

