import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [setItems] = useState([]);
  const [setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setItems(prevItems => [...prevItems, product]);
    setTotalPrice(prevPrice => prevPrice + product.price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!message)newErrors.message = 'Не все поля заполнены';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    axios.post('http://localhost:3003/home', { name, email, message })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Failed to send message.', error);
      });
  };

  const fetchProducts = () => {
    axios.get('http://localhost:3001/media')
      .then(res => {
        const randomProducts = res.data.sort(() => 0.5 - Math.random()).slice(0, 10); // Getting 10 random products
        setProducts(randomProducts);
      })
      .catch(err => console.log(err));
  };

  const handleFavoriteChange = (id, isFavorite) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, isFavorite } : product
      )
    );
  };

  return (
    <div className="home">
      <div className="productcards">
        {products.map(product => (
          <ProductCard key={product.id} data={product} onFavoriteChange={handleFavoriteChange} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="cards-container">
          <div className="card">
            <h2>Нам 22 года</h2>
            <p>На рынке игровых устройств с 2002 года. Тысячи собранных компьютеров и довольных клиентов.</p>
          </div>
          <div className="card">
            <h2>Доставка по всей России</h2>
            <p>Самовывоз, курьерская по Москве и Подмосковью, транспортными компаниями по России.</p>
          </div>
          <div className="card">
            <h2>Удобная оплата</h2>
            <p>Наличными или картой при получении</p>
          </div>
          <div className="card">
            <h2>Надежная гарантия</h2>
            <p>Гарантия до 3-х лет, консультация онлайн в течение 3-х лет.</p>
          </div>
          <div className="card">
            <h2>Лучшие комплектующие</h2>
            <p>Используем сертифицированные комплектующие от проверенных и надежных брендов.</p>
          </div>
          <div className="card">
            <h2>Гибкая обратная связь</h2>
            <p>Поможем в любой ситуации</p>
          </div>
      </div>
      <div className="feedback-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="ФИО"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="form-group-input"
            />
          </div>

          <div className="form-group">
            <input
              placeholder="Ваша почта"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Текст сообщения"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
