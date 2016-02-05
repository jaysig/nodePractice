// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
// only works for creating an index route
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions
//returns all lions
app.get('/lions', function(req,res){
  res.json(lions);
});
//returns one lion based on an id
app.get('/lions/'+id,function(req,res){
  var lion = lions[id];
  res.json(lion);
});
//Add a lion
app.post('/lions',function(req,res){
  var lion = req.body.lion;
  lions.push(lion);
  res.send(lion);
});
//Update a lion
app.put('/lions',function(req,res){
  var lion = req.body.lion;
  var lionIndex = lions.indexOf(lion);
  lions[lionIndex] = lion;
  res.send(lion);
});
//Delete a lion
app.destroy('/lions',function(req,res){
  var lion = req.body.lion;
  var lionIndex = lions.indexOf(lion);
  lions.splice(lionIndex,1);
  res.send('lion removed');
});

app.listen(3000);
console.log('on port 3000');