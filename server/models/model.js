var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

	first_name : String, 
	_poll : {type: Schema.Types.ObjectId, ref: 'Poll' },


}, {timestamps : true });

UserSchema.path('first_name').required(true, "First Name cannot be blank");

mongoose.model('User', UserSchema);



var PollSchema = new Schema({

	poll_question : String, 
	poll_option1 : String, 
	poll_option2 : String, 
	poll_option3 : String, 
	poll_option4 : String, 
	_user : {type: Schema.Types.ObjectId, ref: 'User' },


}, {timestamps : true });

PollSchema.path('poll_question').required(true, "Poll Question cannot be blank");

mongoose.model('Poll', PollSchema);

















