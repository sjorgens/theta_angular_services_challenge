/**
 * Created by Scott on 1/15/16.
 */

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
    //response.send('Angular services are running.....');
    response.sendFile(path.join(__dirname, './public/views/index.html'));
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});