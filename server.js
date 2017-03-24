var express = require('express');
var path = require('path');
var body_parser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(body_parser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){

	console.log('Listening in port 8000');


});





