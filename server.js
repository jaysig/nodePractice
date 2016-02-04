var fs = require('fs');
var express = require('express');

var app = express();

var jsonData = {count: 12, message: '12'};

app.get('/', function(req,res){
	res.json(jsonData);
});
app.get('/data', function(req,res){
	res.json(jsonData);
});

app.listen(3000);