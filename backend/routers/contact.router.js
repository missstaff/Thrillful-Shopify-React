import express from 'express';
import nodemailer from 'nodemailer';

const contactRouter = express.Router();

// create reusable transporter object using the default SMTP transport
contactRouter.post('/', (req, res) => {
    const customer = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "shaun.heller97@ethereal.email",
        pass: 'J5af28jazjQKxmeNKY'
      }
    });

     // setup email data with unicode symbols
    const mailOptions = {
        from: '"Fred Foo " <foo@example.com>',
        to: "myteamofexecs@example.com",
        replyTo: customer.email,
        subject: customer.subject,
        text: customer.message,
        html: "<div>Customer Message Ended</div>"
    }
  
     // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});


export default contactRouter;