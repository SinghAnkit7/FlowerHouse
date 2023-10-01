
const mongoose= require('mongoose')
const bcrypt = require('bcrypt');



    const userSchema = mongoose.Schema({
        FirstName:{
            type:String,
           
             required:true
        },
        LastName:{
            type:String,
            
            required:true
        },
            Email:{
            type:String,
            
            required:true
        },
        Phone:{
            type:Number,
            
            required:true
        },
        Password:{
            type:String,
            
            required:true
        },
        CPassword:{
            type:String,
            
            required:true
        }
        
    })

    userSchema.pre("save",function(next){
        if(!this.isModified("Password")){
            return next();
        }
        this.Password=bcrypt.hashSync(this.Password, 10);
        next();
    
    })


    userSchema.methods.comparePassword = function(plaintext, callback){
        return callback(null, bcrypt.compareSync(plaintext, this.Password))
    };






    const userModel = mongoose.model('user',userSchema)

    module.exports=userModel;


