var app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider){

	$routeProvider
	.when('/', { templateUrl: '/../partials/main.html'  })
	.when('/dashboard', { templateUrl: '/../partials/dashboard.html'  })
	.when('/create', { templateUrl: '/../partials/create.html'  })
	.otherwise( {redirectTo : '/'    })


});





app.factory('myFactory', function($http){

	var factory = {};

	factory.userLogin = function(user_data, callback)
	{
		$http.post('/user/login', user_data)
		.then(  function(server_results){

			console.log('factory back from server', server_results);
			callback(server_results);

		});

	}

	factory.allUsers = function(callback)
	{
		$http.post('/user/all')
		.then(  function(server_results){

			console.log("Im back with all users", server_results);
			callback(server_results);

		});

	}


	factory.createPoll = function(poll_data,  callback)
	{
		$http.post('/create/poll', poll_data)
		.then(  function(server_results){

			callback();

		});

	}

	factory.deletePoll = function(user_id, callback)
	{
		$http.post('/user/delete', user_id)
		.then(  function(server_results){

			console.log('factory back from server', server_results);
			callback(server_results);

		});

	}








	return factory;

});



app.controller('myController', ['myFactory','$scope','$location',  function(myFactory, $scope, $location){


	var users = [];
	var user = {};
	var currentUser = {};
	var newPoll = {};
	$scope.allUsers = function()
	{
		
		myFactory.allUsers($scope.setUsers);
	}



	$scope.setUser = function(userObject){


		currentUser = userObject.data;
		console.log("current user", currentUser);
		$location.path('/dashboard');


	}



	$scope.setUsers = function(userObject){

		console.log("im still here with everything ", userObject);
		users = userObject.data;
		$scope.users = users;
		console.log("users", users);

	}


	$scope.userLogin = function()
	{
		user = 	$scope.user;
		myFactory.userLogin(user, $scope.setUser);
		

	}

	$scope.createPoll = function(){

		newPoll = $scope.newPoll;
		newPoll.user = currentUser._id;
		myFactory.createPoll(newPoll, $scope.goDashboard);


	}

	$scope.deletePoll = function(user_id){

		myFactory.deletePoll({ _id : user_id }, $scope.allUsers);


	}

	$scope.newPoll = newPoll;
	$scope.userId = currentUser
	$scope.allUsers();
	$scope.user = user;
	$scope.currentUser = currentUser;




	$scope.goCreate = function(){

		$location.path('/create');
	};

	$scope.goDashboard = function(){
		$scope.allUsers();
		$location.path('/dashboard');
	};


}]);




































