const mongoose = require('mongoose')

const connect = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const contactModel = mongoose.model('usercontact',  connect)
module.exports=contactModel;