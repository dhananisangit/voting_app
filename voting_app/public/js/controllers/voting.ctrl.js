/*global angular */

/**
 * The main controller for the app. The controller:
 * - exposes the model to the template and provides event handlers
 */
angular.module('voting_app')
	.controller('votingCtrl', function votingCtrl($scope, apiService) {
		'use strict';

		$scope.loginView = true
		$scope.tableView = false
		$scope.username = ""

		$scope.ready = function(userVoteResults, userID){
			apiService.get('/v1/getlist')
				 .then(function(data){
					 $scope.results = []
					 for(var i=0;i<data.length;i++){
						 $scope.results.push({
							 'userID':userID,
							 'fruitID':data[i].ID,
							 'name':data[i].Name,
							 'totalVotes': data[i].total_votes,
							 'voted':userVoteResults[data[i].Name]!=undefined?true:false
						 })
					 }
				 })
		}

		$scope.login = function(uname){
			var data = {
				'name':uname
			}
			$scope.username = uname
			apiService.post('/v1/login', data)
			 	 .then(function(res){
					 	if(res.status=="200"){
					 			$scope.fetchData(res.userID)
					 	}
					 	else if(res.status=="400"){
					 		alert("User does not exist in system!!")
					 	}
				 })
		}

		$scope.fetchData = function(userID){
			var data = {
				'userID':userID
			}
			apiService.post('/v1/fetchvotes', data)
				 .then(function(res){
					 	$scope.ready(res.results, res.userID);
					 	$scope.tableView = true;
					 	$scope.loginView = false;
				 })
		}

		$scope.voteFruit = function(fruitID, userID){
			var data = {
							'fruitID':fruitID,
							'userID':userID
			}
			apiService.post('/v1/vote', data)
				 .then(function(res){
					 $scope.fetchData(userID)
				 })
		}


	});
