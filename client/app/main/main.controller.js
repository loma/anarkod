'use strict';

angular.module('anarkodApp')
  .controller('MainCtrl', function (Students, $scope, $http) {
    $scope.students = Students.query({mode:'mini'});
  });
