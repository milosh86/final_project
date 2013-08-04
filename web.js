var express = require('express');
var fs = require('fs');



var app = express();//express.createServer(express.logger());

var indexFile = fs.readFileSync('./index.html').toString();

app.get('/', function(request, response) {
  response.send(indexFile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
