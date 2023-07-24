// // fs module
var http = require('http');
var fs = require('fs');

console.log("server");
http.createServer(function(req,res){
    fs.readFile("index.html",function(err,data){
            res.writeHead(200 , {"content-type" : "text/html"});
            res.write(data);
            return res.end();  
    })
}).listen(8082);

// // express using server 
var express = require('express');
var app = express();

console.log('welcome to express');
app.get('/' , (req,res) => {
    res.send('express server is running now')
    console.warn('now you are using express');
    res.end();
}).listen(7090);