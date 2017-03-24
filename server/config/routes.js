var controller = require('./../controllers/route.js');


module.exports = function(app){

	app.post( '/player/new', function(req, res){


		controller.addPlayer(req, res);

	})










};