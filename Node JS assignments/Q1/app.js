var http = require('http');

var server =  http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Success I'm listening to port 3000");
});

server.listen(3000, '127.0.0.1');
console.log('now running on port number 3000');
