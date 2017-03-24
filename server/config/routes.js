var controller = require('./../controllers/route.js');


module.exports = function(app){

	app.post( '/user/login', function(req, res){


		controller.userLogin(req, res);

	})

	app.post( '/user/all', function(req, res){


		controller.displayAll(req, res);

	})

	app.post( '/user/delete', function(req, res){


		controller.deleteUser(req, res);

	})


	app.post( '/create/poll', function(req, res){


		controller.createPoll(req, res);

	})









};