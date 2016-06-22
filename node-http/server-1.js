var http = require('http');

var hostname = 'localhost';
var port = 3000;

//creates server that gives us access to the request message coming in and response going out
var server = http.createServer(function(req, res) {
  //print out request headers
  console.log(req.headers);
  //200 is status code and contnt type
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
});

//start the server - port, hostname and function to be called
server.listen(port, hostname, function() {
  console.log('server is running at http://' + hostname + ':' + port);
});
