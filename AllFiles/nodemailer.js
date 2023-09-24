var nodeMailer = require('nodemailer')
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',//simple mail trnsfer protocol (smtp?)
    port:587,
    secure:false,
    reqioreTLS:true,//TLS  is a way to provide secure connections 
    auth:
    {
        user:'ankitsingh.se71@gmail.com',
        pass:'wuhfvaxegfrrczqc'
    }
    
});

var mailOptions = {
    from: 'ankitsingh.se71@gmail.com',
    to:['prajapatirohit9596@gmail.com','kp9193815318@gmail.com'],
    subject:'node mail',
    // text:"<h1>hEllo developers are you ready to code</h1>"
    html:"<h1>Hello susovanpanda</h1><p>Are you ready to fly </p>"
}
transport.sendMail(mailOptions,function(error,info){
    if(!error)
    {
        console.warn(error)
    }
    else{
        console.warn('email has been send'+ info.response);
    }
});


