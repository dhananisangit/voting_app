/**
 * The main app module
 *
 * @type {angular.Module}
 */

// Avoid setting a variable for the module and rely on getter/setter syntax.
// Supplying an array as the second argument, sets the module. Leaving them off gets the module.
// Only set the module once. Use get for all times after that.

angular.module('voting_app', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

// Never bind logic to the router and reference a resolve property on each
// controller to couple the logic.

		$routeProvider
			.when('/', {
				controller: 'votingCtrl',
				templateUrl: 'voting-index.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
