/* global angular */
angular.module('chal.login.controllers', [])

  .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $state) {
    // Form data for the login modal
    $scope.loginData = {};

//    // Create the login modal that we will use later
//    $ionicModal.fromTemplateUrl('templates/login.html', {
//      scope: $scope
//    }).then(function (modal) {
//      $scope.modal = modal;
//    });
//
//    // Triggered in the login modal to close it
//    $scope.closeLogin = function () {
//      $scope.modal.hide();
//    };
//
//    // Open the login modal
//    $scope.login = function () {
//      $scope.modal.show();
//    };

    // Open the login modal
    $scope.logout = function () {
      $state.go('app.login');
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
//    console.log('Doing login', $scope.loginData);
      $state.go('app.calendars');

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
    };
  });
