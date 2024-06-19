const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

const config = {
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_APP_USER,  
        pass: process.env.GMAIL_APP_PASSWORD 
    }
}

const transporter = nodemailer.createTransport(config);

async function sendEmail(to, subject, htmlContent) {
    let message = {
        from: process.env.GMAIL_APP_USER, 
        to: to, 
        subject: subject, 
        html: htmlContent, 
    };

    try {
        await transporter.sendMail(message); 
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    sendEmail
};
