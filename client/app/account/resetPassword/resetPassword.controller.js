'use strict';

angular.module('demoApp')
  .controller('ResetpwdCtrl', function ($scope, Auth, $location, $window) {
    $scope.isSent = false;
    $scope.requestResetPwd = function(email) {
      Auth.resetPassword(email).then( function(data) {
          if(data.data.success) $scope.isSent = true;
          else
            $scope.isSent = false;
        })
        .catch( function(err) {
          console.log('err=> ', err);
        });
    }
  });

