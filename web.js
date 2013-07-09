var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function() {
  app.use('/media', express.static(__dirname + '/media'));
});

app.get('/', function(request, response) {
  var html = fs.readFileSync('index.html', 'utf8');
  response.send(html);
});

app.get('/', function(request, response) {
  var html = fs.readFileSync('index.html', 'utf8');
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
