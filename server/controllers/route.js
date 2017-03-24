var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var Team = mongoose.model('Team');



module.exports = {


	addPlayer : function(req, res){

		Player.create(req.body , function(err,results){
			if(err)
			{
				res.json(err);
			}
			else
			{
				res.json(results);
			}

		});



	}, 

	addPlayerToTeam : function(req, res){


		var team_id = req.params.id;
		Team.findOne({_id: team_id}, function(err, results){
		var newPlayer = new Player({first_name: req.body.fName, last_name: req.body.lName, birthdate: req.body.birthdate});
		newPlayer._team = team._id;


		Team.update({_id: team._id}, {$push: {"_players": newPlayer}}, function(err){
			newPlayer.save(function(err){
			if(err){
				res.json(err);
			} else {
				console.log("comment added");
			}
			})


		})
		})


	},


	displayTeam : function(req, res){

		Team.find({}).populate('_players').exec(function(err, results){
			if(err)
			{
				res.json(err);
			}
			else
			{
				res.json(results);
			}
		});


	},



















}

