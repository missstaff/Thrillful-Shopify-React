import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
//import data from './data.js';
import userRouter from './routers/userRouter.js';
import contactRouter from './routers/contact.router.js';
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));

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

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
})

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});