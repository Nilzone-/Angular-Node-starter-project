var express = require('express');
var app = express();
var bodyParser          = require('body-parser');
var methodOverride      = require('method-override');
var morgan              = require('morgan');
var sql                 = require('seriate');
var path                = require('path');


var port = process.env.PORT || 3000;


app.use(express.static('public'));


//This logs all request to the console
app.use(morgan('dev'));

//parse application/json
app.use(bodyParser.urlencoded({'extended' : true}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type : 'application/vnd.api+json'}));

app.use(methodOverride());

//Our default path: index.html
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, function(err) {
    console.log('App is running on localhost: ' + port);
});