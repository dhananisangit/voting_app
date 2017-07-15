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
				templateUrl: 'voting-index.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
