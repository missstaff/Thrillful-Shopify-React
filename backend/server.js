import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fileupload from 'express-fileupload';
import cors from 'cors';
import morgan from 'morgan';
import lodash from 'lodash';
//import data from './data.js';
import userRouter from './routers/userRouter.js';
import imageRouter from './routers/imageRouter.js';

const port = process.env.PORT || 5001;
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies// this replaces body parsers encoding as well.
app.use(express.json()); //Used to parse JSON bodies //this replaces Body Parser. 
app.use(morgan('dev'));
app.use(cors());
// const fileUpload = require('express-fileupload');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const _ = require('lodash');

//solving cors issue
// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*")
//   // res.header("Access-Control-Allow-Credentials: true") 
//   res.header("Access-Control-Allow-Headers", 
//   "Origin, X-Requested-With, Content-Type, Accept, Authorization")
//   // res.header("Access-Control-Max-Age", "1000")
//   if (req.method == "OPTIONS"){
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
//       return res.status(200).json({})
//   }
//   next()
// })



app.use("/img", imageRouter)
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},()=>console.log('connected to DB'))

// app.get('/api/users', (req, res) => {
//   res.send(data.users);
// });




//USERS
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
//IMAGES
