let a = 10;
let b = 20;
let c = 30;

 console.log(a+b+c);

function  fun(a,c)
{
    console.log(a+c);
}


var http = require('http');
http.createServer(function(req,res)
{
    res.write('<h1>first server on node.js</h1>');
    res.write('first server on node.js');
    res.write('<h2>first server on node.js</h2>');
    res.end();
}).listen(5009);

// var sum=require('./demo2.js')
// console.log(sum(20,30));


















var http=require('http')
http.createServer(function(req,res)
{
    res.write('<h1>Hello form node js server</h1>')
    res.write('Hello form node js server3')
    res.write('Hello form node js server3')
    res.end();
}).listen(5002)