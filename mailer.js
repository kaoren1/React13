require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: 'isip_ya.yu.rusakevich@mpt.ru',
    to: 'isip_ya.yu.rusakevich@mpt.ru',
    subject: '',
    text: ''
}

transporter.sendMail(mailOptions, err = new Error(message))