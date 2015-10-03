'use strict';

angular.module('anarkodApp')
  .service('Contact', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('/api/Contacts/:id/:controller', {
        id: '@_id'
      }
      );
  });
