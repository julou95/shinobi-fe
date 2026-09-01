import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, name, text } = JSON.parse(req.body);
    console.log('req.body', req.body);
    console.log('phone', phone);
    console.log('name', name);
    console.log('text', text);

    const transport = nodemailer.createTransport({
        service: 'gmail',
        /* 
        setting service as 'gmail' is same as providing these setings:
        host: "smtp.gmail.com",
        port: 465,
        secure: true
        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
        auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: 'louis.jungo@gmail.com',
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${phone})`,
        text: text,
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                reject(err.message);
            }
        });
        });

    try {
        return res.status(200).json(await sendMailPromise());
    } catch (err) {
        return res.status(500).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
