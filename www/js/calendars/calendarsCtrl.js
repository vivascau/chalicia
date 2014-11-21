/* global angular */
angular.module('chal.calendars.controllers', [])

  .controller('CalendarsCtrl', function ($scope) {
    // TODO - get data dynamically
    $scope.calendars = [
      {id:1, freeToday:false},
      {id:2, freeToday:true},
      {id:3, freeToday:false},
      {id:4, freeToday:false},
      {id:5, freeToday:true},
      {id:6, freeToday:false},
      {id:7, freeToday:false}
    ];
  });
