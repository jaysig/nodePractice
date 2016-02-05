
var express = require('express');
var app = express();

var jsonData = {count: 12, message: '12'};

app.get('/', function(req,res){
	//res.sendFile takes an absolute path to a file and
	// sets the file mime type based on the file extname 
	res.sendFile(__dirname + '/index.html', function(err){
		if(err){
			res.status(500).send(err);
		}
	});
});

app.get('/data', function(req,res){
	res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
	console.log('listening on port', port);
});