'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('veryfied', {
        url: '/veryfied',
        templateUrl: 'app/account/veryfy/veryfied.html',

      })
      .state('veryfy', {
        url: '/veryfy',
        templateUrl: 'app/account/veryfy/veryfy.html',

      })
      .state('resetPassword', {
        url: '/resetpassword',
        templateUrl: 'app/account/resetPassword/resetPassword.html',
        controller: 'ResetpwdCtrl',
      });
  });