import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import data from './data.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

import cors from 'cors';

const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors({ "origin": "*"}));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// app.get('/api/users', (req, res) => {
//   res.send(data.users);
// });
//user router
app.use('/api/users', userRouter);
//productRouter
app.use('/api/products',productRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});