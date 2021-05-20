import express from 'express';
import Mailer from '../controllers/nodemailer.controller';


const contactRouter = express.Router();

contactRouter.post('/', Mailer.SendMessage);

export default contactRouter;