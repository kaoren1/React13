const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `isip_ya.yu.rusakevich@mpt.ru`,
    pass: `sntf shqj jubr mllg`
  }
});

app.post('/orders', (req, res) => {
  const { name, address, paymentMethod, cartItems, totalPrice } = req.body;

  const mailOptions = {
    from: `isip_ya.yu.rusakevich@mpt.ru`,
    to: `isip_ya.yu.rusakevich@mpt.ru`,
    subject: 'Подтверждение',
    text: `ФИО: ${name}\nАдрес: ${address}\nЗаказ:\n${cartItems.map(item => `${item.name} - ${item.price} руб. x ${item.cartQuantity}`).join('\n')}\nОплата: ${paymentMethod}\nСумма: ${totalPrice} руб.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Ошибка при отправке письма');
    }
    res.status(200).send('Заказ оформлен');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});