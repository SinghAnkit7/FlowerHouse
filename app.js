const express = require('express');
const multer = require('multer');

const app=express();
const router = express.Router();

///////////// requireing mongo connection/////////
const mongoCon = require('./db');
const userModel = require('./model/registersSchema');
const productModel = require('./model/productSchema');
const contactModel = require('./model/contactschema');



const bodyParser = require('body-parser');
const { model } = require('mongoose');
const { fileLoader } = require('ejs');

app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine','ejs');

app.use(express.static('views'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/assert',express.static('assert'))


router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/about_us',(req,res)=>{
    res.render('about_us')
})

router.get('/login',(req,res)=>{
    res.render('login')
})


router.get('/search_bar',(req,res)=>{
    res.render('search_bar')
})

router.get('/gema',(req,res)=>{
    res.render('gema.ejs')
})

router.get('/stella',(req,res)=>{
    res.render('stella')
})

router.get('/rosa',(req,res)=>{
    res.render('rosa.ejs')
})

router.get('/chaira',(req,res)=>{
    res.render('chaira.ejs')
})

router.get('/view',(req,res)=>{
    res.render('view')
})

router.get('/award',(req,res)=>{
    res.render('award')
})
router.get('/signup',(req,res)=>{
    res.render('dashboard/signup')
})
router.get('/dashboard/index',(req,res)=>{
    res.render('dashboard/index')
})



// router.get('/view-contact',(req,res)=>{
//     res.render('dashboard/view-contact')
// })




// start contact us connection get

router.get('/contact_us',(req,res)=>{
    res.render('contact_us')
});

// contact us api
router.post('/contact_us',(req, res)=>{
    var usercontact = new contactModel({
        fullName:req.body.fullName,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        message:req.body.message
    });

    usercontact.save().then(()=>{
        console.log("contact data save");
    })
    .catch((err)=>{
        console.log(err);
    });
});

router.get('/view-contact', async(req,res)=>{
    try{
        const viewcontacts=await contactModel.find({});
        res.render('dashboard/view-contact',{viewcontacts: viewcontacts});
        console.log(viewcontacts);
    }catch(err){
        console.log(err)
    }
});

    //delete api contact

    router.get("/delete3/:id", async (req, res)=>{
        try{
            const viewcontacts = await contactModel.findByIdAndRemove(req.params.id);
            console.log(viewcontacts)
            res.redirect('../view-contact')
    
            // res.send('<script>"window.location.href://localhost:2000/viewmovie";</script>')
        } catch(err){
            console.log(err);
        }
    });

    // edit api contact
router.get("/edit2/:id",async(req,res)=>{
    try{
        const editcontact= await userModel.findById({_id : req.params.id});
        res.render("dashboard/edit-registration",{editcontact:editcontact});
        console.log(editcontact)
    } catch(err){
            console.log(err);
}
});























/////////////////////////////////////// start Create registration api , get , post , delete , edit , update///////////////////////////////////////

router.get('/registration',(req,res)=>{
    res.render('registration')
})

////////////////////////////// create registration API //////////////////////////////

router.post('/registration',(req,res)=>{
    var user = new userModel({
        FirstName: req.body.FirstName,
        LastName : req.body.LastName,
        Email    : req.body.Email,
        Phone    : req.body.Phone,
        Password : req.body.Password,
        CPassword: req.body.CPassword
    });
    user.save().then(()=>{
        console.log("saved data");
       
    })
    .catch((err)=>{
        console.log(err);
        
    });
});

//////////// dashboard view-registration get render////////////////


router.get("/view-registration",async(req,res)=>{
    try{
        const viewdata =await userModel.find({})
        res.render('dashboard/view-registration',{viewdata: viewdata});
        console.log(viewdata);
    }catch(err){
        console.log(err);
    }
    });




           
    //delete api registration

router.get("/delete/:id", async (req, res)=>{
    try{
        const data = await userModel.findByIdAndRemove(req.params.id);
        console.log(data)
        res.redirect('../view-registration')

        // res.send('<script>"window.location.href://localhost:2000/viewmovie";</script>')
    } catch(err){
        console.log(err);
    }
});





// edit api registration
router.get("/edit/:id",async(req,res)=>{
    try{
        const editData= await userModel.findById({_id : req.params.id});
        res.render("dashboard/edit-registration",{editData:editData});
        console.log(editData)
    } catch(err){
            console.log(err);
}
});



////////////////////////////// update api  //////////////////////////////


router.post("/edit/:id", async(req, res)=>{
    try{
    const update=({
        FirstName: req.body.FirstName,
        LastName : req.body.LastName,
        Email    : req.body.Email,
        Phone    : req.body.Phone,
        Password : req.body.Password,
        CPassword: req.body.CPassword
        
    });

   
        const updatedatas= await userModel.findByIdAndUpdate(req.params.id,update);
        res.redirect("../view-registration");
        console.log(updatedatas)
    }



    catch(err){
        console.log(err);
    }
});
 


/////////////////////////////////////// End Create registration api , get , post , delete , edit , update///////////////////////////////////////




// ///////////////////product api /////////////////////////


  
// file upload

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './upload');
    },

    filename: (req,file,cb)=>{
        cb(null, file.originalname);
        //cb(null, uuidv4()+'-'+ Date.now() +path.extname(file.originalname));
    }
});

const fileFilter = (req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    } else{
        cb(null,flase);
    }
}

let upload = multer({storage, fileFilter});




router.get('/add-product',(req,res)=>{
    res.render('dashboard/add-product')
})

//////////////////////////////// create add-product API/////////////////////////////////////
router.post('/add-product', upload.single('fileupload'),(req,res)=>{
    var userproduct = {
        productname       : req.body.productname,
        productdescription: req.body.productdescription,
        price             : req.body.price,
        fileupload       : req.file.fileupload
        }                                                                                                                                                                                                                        
        
    var addproduct=new  productModel(userproduct);
    addproduct.save()
    .then(()=>{
        console.log("saved data");
       
    })
    .catch((err)=>{
        console.log(err);
        
    });
});




//////////// dashboard app-product////////////////

// router.get('/view-product',(req,res)=>{
//     res.render('dashboard/view-product')
// })

router.get("/view-product",async(req,res)=>{
    try{
        const productdata =await productModel.find({})
        res.render('dashboard/view-product',{productdata: productdata});
        console.log(productdata);
    }catch(err){
        console.log(err);
    }
    });










//delete api view-product


router.get("/delete2/:id", async (req, res)=>{
    try{
        const datas = await productModel.findByIdAndRemove(req.params.id);
        console.log(datas)
        res.redirect('../view-product')

        // res.send('<script>"window.location.href://localhost:2000/viewmovie";</script>')
    } catch(err){
        console.log(err);
    }
});

































app.use('/',router);

app.listen(2000);


require('./db')
