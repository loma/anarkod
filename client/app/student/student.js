'use strict';

angular.module('anarkodApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('students', {
        url: '/students/:studentId',
        templateUrl: 'app/student/student.html',
        controller: 'StudentCtrl'
      })
      .state('students.tag', {
        url: '/tags/:tagId',
        templateUrl: 'app/student/tag.html',
        controller: 'StudentCtrl'
      });
  });
