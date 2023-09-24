// var http=require('http');
// var fs= require('fs');
// http.createServer(function(req,res){
//     fs.readFile('form.js',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })

// }).listen(5006)



//Create txt file 

// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello World',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// });

//CRETE HTML FILE
// var fs = require('fs');
// fs.appendFile('mynewfile1.html', 'Hello World',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// });

// var fs = require('fs');
// fs.unlink('mynewfile1.html',function(err){
//     if(err) throw err;
//     console.log('html delete file!');
// });



//old file convert into new file name remane txt file
// var fs = require('fs');
// fs.rename('mynewfile1.txt','mynewfolder.txt',function(err){
// if(err) throw err;
// console.log('rename!')
// });




//delete txt file
// var fs=require ('fs');
// fs.unlink('mynewfile1.txt',function(err){
//     if(err) throw err;
//     console.log('Deleted!')
// })



//writefile
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// var fs = require('fs');

// fs.unlink('mynewfile3.txt',function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });


//open

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });


var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});







