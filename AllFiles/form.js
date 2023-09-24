var http=require('http');

    http.createServer(function(req,res)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Node.js Form</h1>');
        res.write('<label><b>First Name <b></lable> :'+'<input type="text" name="name" placeholder="Enter your FirstName"><br>')
        res.write('<label><b>Second Name <b></lable> :'+'<input type="text" name="name" placeholder="Enter your SecondName"><br>')
        res.write('<label><b>Password<b></lable> :'+'<input type="password" name="password" placeholder="Enter your Password"><br>')
        res.write('<label><b>Email<b> </lable> :'+'<input type="email" name="email" placeholder="enter your email"><br>')
        res.end();
    }).listen(5008);

    

