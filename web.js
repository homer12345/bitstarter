var express = require('express');
var fs = require('fs');

var indexFile  = fs.readFileSync('index.html');
var indexFileString = indexFile.toString();

console.log(indexFileString);


var app = express.createServer(express.logger());
  
app.get('/', function(request, response) {
  response.send(indexFileString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
