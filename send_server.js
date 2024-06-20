const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(cors());

app.post('/home', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Message sent:', { name, email, message });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'isip_ya.yu.rusakevich@mpt.ru',
      pass: 'tbvh suiu rtkw teoe',
    },
  });

  const mailOptions = {
    from: 'isip_ya.yu.rusakevich@mpt.ru',
    to: 'isip_ya.yu.rusakevich@mpt.ru',
    subject: 'Запрос на обратную связь',
    text: `Запрос на обратную связь:
        ФИО: ${name}
        Почта: ${email}
        Cообщение: ${message}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Failed to send email.', err);
      res.status(500).send('Order placed but failed to send email');
    } else {
      console.log('Email successfully sent!', info.response);
      res.status(200).send('Order placed and email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
