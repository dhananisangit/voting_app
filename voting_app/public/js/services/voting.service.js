
// All services are singletons, using .service() or .factory() differs the way Objects are created.
// These act as a constructor function and are instantiated with the 'new' keyword.
// Use 'this' for public methods and variables.

angular.module('voting_app')
	.service('apiService', function ($http) {
		'use strict';

    return new function(){
			// GET requests are served here
      this.get = function(api){
        return $http.get(api)
          .then(function(res){
            return res.data;
        })
      },

			// POST requests are served here
      this.post = function(api, data){
        return $http.post(api, data)
          .then(function(res){
            return res.data;
          })
      }
    }

  });
