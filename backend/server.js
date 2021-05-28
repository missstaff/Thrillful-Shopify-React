import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
//import data from './data.js';
import userRouter from './routers/userRouter.js';
import imageRouter from './routers/imageRouter.js'
//import morgan from 'morgan';
import contactRouter from './routers/contact.router.js';
import cors from 'cors';

const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
//app.use(morgan('dev'));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(cors());
//{ credentials: true, origin: 'http://localhost:3000'}
//whoreface

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// app.get('/api/users', (req, res) => {
//   res.send(data.users);
// });

app.use('/api/users', userRouter);
app.use('/api/contact', contactRouter);

//IMAGES
app.use("/img", imageRouter)
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},()=>console.log('connected to DB'))



const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});