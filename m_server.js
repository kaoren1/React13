const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

app.post('/orders', (req, res) => {
  const { name, address, paymentMethod, cartItems, totalPrice } = req.body;
  console.log('Order received:', { name, address, paymentMethod, cartItems, totalPrice });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'isip_ya.yu.rusakevich@mpt.ru',
      pass: '=7d?/omWtp',
    },
  });

  const mailOptions = {
    from: 'isip_ya.yu.rusakevich@mpt.ru',
    to: 'isip_ya.yu.rusakevich@mpt.ru',
    subject: 'Заказ оформлен',
    text: `Заказ оформлен.
        ФИО: ${name}
        Адрес: ${address}
        Заказ: ${cartItems.map(item => `${item.name} - ${item.price} руб. x ${item.cartQuantity}`).join(', ')}
        Оплата: ${paymentMethod}
        Сумма: ${totalPrice} руб.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send email.', error);
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