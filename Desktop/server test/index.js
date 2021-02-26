var http = require("http"); //use the node package http
http.createServer(function(request, response) { //use a method in http called createServer
response.writeHead(200, {"Content-Type": "text/plain"}); //write out the http request head
response.write("Hello World"); // add the http request body
response.end(); // end the request
}).listen(8888);

