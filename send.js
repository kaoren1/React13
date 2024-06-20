import axios from 'axios';

const handleOrderSubmit = (orderData) => {
  axios.post('http://localhost:3005/orders', orderData)
    .then(response => {
      console.log(response.data);
      alert('Заказ успешно оформлен');
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('Ошибка при оформлении заказа', error);
    });
};

const orderData = {
  name: 'Вася',
  address: 'Москва',
  paymentMethod: 'Кредитная карта',
  cartItems: [
    { name: 'Товар 1', price: 1000, cartQuantity: 2 },
    { name: 'Товар 2', price: 2000, cartQuantity: 1 }
  ],
  totalPrice: 4000
};