'use strict';

angular
  .module('angularPractice')
  .controller('LoginCtrl',
  ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        $scope.showLoginForm=function(){
             $scope.addLoginFormShow=true;
            
        }

        // reset login status
      AuthenticationService.ClearCredentials();
        

      $scope.login = function () {
         
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
          if(response.success) {
            AuthenticationService.SetCredentials($scope.username, $scope.password);
            $location.path('/welcome');
          } else {
            $scope.error = response.message;
            $scope.dataLoading = false;
          }
        });
      };
    }]);