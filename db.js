const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://AnkitSingh:Ankitsingh.se71@cluster0.2qz7y6x.mongodb.net/project",

{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>console.log("successfully registration...."))
.catch((err)=>console.log(err));

const mongoCon=mongoose.connect;

module.exports=mongoCon
