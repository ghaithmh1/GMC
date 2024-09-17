require('dotenv').config();
const nodemailer = require("nodemailer");
console.log(process.env.user)
console.log(process.env.pass)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,  
        pass: process.env.pass   
    }
});

transporter.sendMail({
    to: 'ghaithmh2003@gmail.com',
    subject: 'My Subject',
    html: '<h1>Hi, how are you?</h1>'
})
.then(() => {
    console.log('Email sent');
})
.catch(err => {
    console.error('Error sending email:', err);
});
