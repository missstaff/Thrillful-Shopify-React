import express from 'express';
import multer from "multer";
import cloudinary from "cloudinary"
import expressAsyncHandler from 'express-async-handler';
import imgModel from '../models/imageModel.js'
import dotenv from "dotenv";
import path from 'path';
dotenv.config() 
const imageRouter = express.Router();

const upload2 = multer({
    limits:{
        fileSize: 4 * 1024 * 1024
    }
})

//solving cors issue
// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*")
//     // res.header("Access-Control-Allow-Credentials: true") 
//     res.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization")
//     // res.header("Access-Control-Max-Age", "1000")
//     if (req.method == "OPTIONS"){
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//         return res.status(200).json({})
//     }
//     next()
// })

// connect to cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

//   upload file
  var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads/') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage });

imageRouter.get('/', (req, res) => { 
    imgModel.find({}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            res.json({ items: items }); 
        } 
    }); 
});



imageRouter.post('/',upload.single('image'), (req, res, next) => { 
    console.log('Inside: ', req.file.path)
  
    const data = {
     image: req.file
    }
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result)=>{
     const image = new imgModel({
            img: result.url,
            text: req.body.text
        });
        image.save();
     res.status(200).send({
      message: "success",
      result
     });
    }).catch((error) => {
     res.status(500).send({
      message: "failure",
      error
     });
    });
});


export default imageRouter