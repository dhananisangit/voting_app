angular.module('voting_app')
	.service('apiService', function ($http) {
		'use strict';

    return new function(){

      this.get = function(api){
        return $http.get(api)
          .then(function(res){
            return res.data;
        })
      },

      this.post = function(api, data){
        return $http.post(api, data)
          .then(function(res){
            return res.data;
          })
      }
    }

  });
