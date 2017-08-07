 var http = require('http');
 var port = 3050;
 var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        console.log("Request came from: " + request.url);
        response.end();  
    }).listen(port, function(){
        console.log("Listening on port " + port);
    });
});


 /*var requestHandler = function(request, response){
     console.log("Request came from: " + request.url);
     response.end("Hello, World! Welcome to 32549 Advanced Internet Programming Week 3 by Arsedian Ivanurrahman on 07/07/2017 ");
 }

 var server = http.createServer(requestHandler);

 server.listen(port, function(){
     console.log("Listening on port " + port);
 });
 */