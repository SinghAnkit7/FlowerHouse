
const mongoose= require('mongoose')



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

    const userModel = mongoose.model('user',userSchema)

    module.exports=userModel;