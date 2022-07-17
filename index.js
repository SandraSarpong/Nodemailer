const nodemailer = require('nodemailer');
require("dotenv").config();

let emailTransporter = nodemailer.createTransport({
    service: "gmail",
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    // 
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      }
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: "maameyaasarp@gmail.com",
    subject: "Nodemailer Project",
    text: "Hi from your nodemailer project. This project is for testing purposes",
  }

  emailTransporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log("An error occurred", err);
    } else {
      console.log("Email sent successfully");
    }
  });