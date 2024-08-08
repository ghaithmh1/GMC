
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'ghaithmh03@gmail.com',
    pass: 'irhq nukd bmla gpfh'
    },
  });


  transporter.sendMail({
    to: 'ghaithmh2003@gmail.com',
    subject: 'My Subject',
    html: '<h1>Hi how are you</h1>'
  }).then(() => {
    console.log('Email sent');
  }).catch(err => {
    console.error(err);
  });