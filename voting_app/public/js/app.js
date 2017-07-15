/*global angular */

/**
 * The main app module
 *
 * @type {angular.Module}
 */
angular.module('voting_app', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider
			.when('/', {
				controller: 'votingCtrl',
				templateUrl: 'voting-index.html',
			})
			// .when('/:userID',{
			// 	controller:'votingCtrl',
			// 	templateUrl: 'voting-table.html',
			// })
			.otherwise({
				redirectTo: '/'
			});
	});
