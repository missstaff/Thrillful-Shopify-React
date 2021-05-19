import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const contactRouter = express.Router();


contactRouter.post('/', expressAsyncHandler(async (req, res) => { 
  const customer = req.body;
  
}));