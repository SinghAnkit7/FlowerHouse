const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    productdescription:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    fileupload:{
        type:String,
        
    }
});

const productModel = mongoose.model('userproduct',productSchema)
module.exports=productModel;