'use strict';

angular.module('demoApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window, $state) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {

      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          username: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $state.go('veryfy');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
