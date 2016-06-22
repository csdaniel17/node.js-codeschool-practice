var http = require('http');
//file system module
var fs = require('fs');
//path module - allows you to construct the path appropriate for specific machines
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  console.log('request for ' + req.url + ' by method ' + req.method);

  var fileUrl;
  if (req.method === 'GET') {
    //if you don't specifiy anything other than website's address, index.html will be returned
    if (req.url === '/') {
      fileUrl = '/index.html';
    } else {
      fileUrl = req.url;
    }
    //to access file from public folder
    var filePath = path.resolve('./public'+fileUrl);
    //check extension
    var fileExt = path.extname(filePath);

    if (fileExt === '.html') {
      //check to make sure file exists
      fs.exists(filePath, function(exists) {
        //will set to true if it exists - false if not
        if (!exists) {
          //if it does not exist show an error message
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end('<h1>Error 404:' + fileUrl + ' not found</h1>');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(filePath).pipe(res);
      });
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Error 404:' + fileUrl + ' not a HTML file</h1>');
  }
});

server.listen(port, hostname, function() {
  console.log('server is running at http://' + hostname + ':' + port);
});
