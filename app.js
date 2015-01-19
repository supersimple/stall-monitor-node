'use strict'

var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/stall');
mongoose.model('updates',{occupied: Boolean, created_at: Date});

app.get('/', function(request, response){
  response.send('received');
});

app.get('/status', function(request, response){
  //gather most recent stored status from db
  mongoose.model('updates').find().sort({_id: -1}).limit(1).exec(function(err,update){
    var stat = update[0].occupied;
    response.json({"status": stat});
  });
});

app.get('/update/:occupied', function(request, response){
  //create a db record here
  var is_occupied = !!request.params.occupied;
  console.log(is_occupied);
  mongoose.model('updates').create({ occupied : is_occupied, created_at : new Date()});  
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});