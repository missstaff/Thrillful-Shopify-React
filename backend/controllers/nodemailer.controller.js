// "use strict";
import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

//const nodemailer = require('nodemailer');




module.exports = {
  SendMessage: (req, res) => {
    async function main(customer) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'shaun.heller97@ethereal.email',
            pass: 'J5af28jazjQKxmeNKY'
        }
    });
  
    let info = await transporter.sendMail({
      from: '"Fred Foo " <foo@example.com>',
      to: "myteamofexecs@example.com",
      replyTo: customer.email,
      subject: customer.subject,
      text: customer.message,
      html: "<div>Customer Message Ended</div>"
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    };
    main(req).then(console.log("SUCCESSFUL")).catch(console.error);
  },
};

//export default contactRouter;