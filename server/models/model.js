var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({

	first_name : String, 
	last_name : String, 
	birthdate : Date,
	_team : {type: Schema.Types.ObjectId, ref: 'Team' },


}, {timestamps : true });

PlayerSchema.path('first_name').required(true, "First Name cannot be blank");
PlayerSchema.path('last_name').required(true, "Last Name cannot be blank");

mongoose.model('Player', PlayerSchema);



var TeamSchema = new Schema({

	team_name : String, 
	_players : [{type: Schema.Types.ObjectId, ref: 'Player' }],


}, {timestamps : true });

TeamSchema.path('team_name').required(true, "Team Name cannot be blank");

mongoose.model('Team', TeamSchema);

















