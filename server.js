var express = require('express');
var app = express();
var port = 3000;

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(){
    console.log('app started');
});
