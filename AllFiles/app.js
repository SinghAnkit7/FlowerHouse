const express = require('express');

const router = express();

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
});
g

app.get('/about',function(req,res){
    res.sendFile(__dirname+"/about.html");
    //res.send("about us page");
})
app.get('/contact',function(req,res){
    res.sendFile(__dirname+"/contact.html");
    //res.send("contact us page");
})
app.listen(5056);                                                                                                                                                                                                                                                                                                                                                                                                                                                               



//post method
// const express = require('express')
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('random.text')
// })
// app.listen(5001);