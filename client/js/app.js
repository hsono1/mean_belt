var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider){

	$routeProvider
	.when('/', { templateUrl: '/../partials/main.html'  })
	.otherwise( {redirectTo : '/'    })


});





app.factory('myFactory', function($http){

	var factory = {};

	factory.createPlayer = function(player_data, callback)
	{
		$http.post('/player/new', player_data)
		.then(  function(server_results){


			callback(server_results);

		});

	}



	return factory;

});



app.controller('myController', ['myFactory','$scope',  function(myFactory, $scope){



	$scope.test = 'Im good';

	var player = [];
	

	$scope.setPlayer = function(playerObject)
	{
		player.push({first_name : playerObject.data.first_name, last_name: playerObject.data.last_name});
	}


	$scope.createPlayer = function()
	{
		myFactory.createPlayer($scope.player, $scope.setPlayer)
	}



}]);




































