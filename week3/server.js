 var http = require('http');
 var port = 3000;

 var requestHandler = function(request, response){
     console.log("Request came from: " + request.url);
     response.end("Hello, World! Welcome to 32549 Advanced Internet Programming Week 3 by Arsedian Ivanurrahman ");
 }

 var server = http.createServer(requestHandler);

 server.listen(port, function(){
     console.log("Listening on port " + port);
 });