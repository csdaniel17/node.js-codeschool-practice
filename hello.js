// var http = require('http');
//
// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write('Hello, this is dog.');
//   response.end();
// }).listen(3000);
//
// console.log('listening on port 3000');


var http = require('http');

//request event
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('dog is running.');
  //timeout event
  setTimeout(function() {
    response.write('dog is done.');
    response.end();
  }, 5000);

}).listen(3000);

console.log('listening on port 3000');
