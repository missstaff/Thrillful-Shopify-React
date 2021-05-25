import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import dataProd from '../productseeds.js';
import Product from '../models/productModel.js'
import { generateToken , isAdmin, isAuth } from '../utils.js';

const productRouter = express.Router();




productRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        //await User.remove({});
        const createdProducts = await Product.insertMany(data.product);
        res.send({ createdProducts });
    })
);
  productRouter.get(
    '/',
    //isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await product.find({});
      res.send(product);
    })
  );


  productRouter.get(
    '/:id',
    //isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Customer Not Found' });
      }
    })
  );

productRouter.post("/messages/new", (req, res) => {
    // save request body into a var
    const newMessage = req.body;
    //   function to create a new document
    Product.create(newMessage, (err, data) => {
        // if there is error
        if (err) {
            // set response to 500, which means internal server error and send error back
            console.log('rating err +++', err);
            res.status(500).send(err);
        } else {
            // 201 means created, successfully created our data and send back the data
            res.status(201).send(data);
        }
        });
    });
  
  productRouter.get("/allmessages", (req, res) => {
    //   function to find a card
    Product.find((err, data) => {
      // if there is error
      if (err) {
        // set response to 500, which means internal server error and send error back
        res.status(500).send(err);
      } else {
        // 200 means found
        res.status(200).send(data);
      }
    });
  });


  productRouter.patch('/updateReview/:reviewid', (req,res)=>{
    var review_id = req.params.reviewid; 
       Product.findByIdAndUpdate(
      review_id,
       { $push: {"reviews": req.body}},
       {  safe: true, upsert: true, new: true},
         function(err, model) {
           if(err){
              console.log(err);
              return res.send(err);
           }
            return res.json(model);
        });
      })
  

export default productRouter