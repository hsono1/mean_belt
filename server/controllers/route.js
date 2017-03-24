var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');



module.exports = {


	userLogin : function(req, res){

		User.findOne(req.body, function(err, results){
			if(err)
			{
				res.json(err);
			}
			else
			{
				if( results == undefined)
				{
					
					User.create(req.body, function(err, results){


						if(err)
						{
							res.json(err);
						}
						else
						{
							
							res.json(results);

					}
					



					});


				}
				else
				{
					
					
					res.json(results);		

				}
				
			}
		});



	},





	displayAll : function(req, res){


		User.find({}).populate('_poll').exec( function(err, results){
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

	deleteUser : function(req, res){


			User.findOne(req.body, function(err, results){
			if(err)
			{
				res.json(err);
			}
			else
			{
				
				User.remove( req.body, function(err){
					if(err)
					{
						res.json(err);
					}
					else
					{
						res.json();
					}


				});

			}
		




			});













	},



	createPoll : function(req, res){

			console.log( "req", req.body);

			User.findOne({_id: req.body.user}, function(err, result){


			var newPoll = new Poll({poll_question: req.body.question, poll_option1: req.body.option1, poll_option2: req.body.option2, poll_option3: req.body.option3, poll_option4: req.body.option4});
			newPoll._user = req.body.user;


			User.update({_id: req.body.user}, {"_poll": newPoll}, function(err){
				newPoll.save(function(err){
				if(err){
					res.json(err);
				} else {
					res.json(result);
				}
				})


			})
			})


	},















}

