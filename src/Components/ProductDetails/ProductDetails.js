import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './ProductDetails.css';
import { CartContext } from '../CartContext/CartContext';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const productData = location.state && location.state.product;
    setProduct(productData);
    if (productData) {
      setIsFavorite(productData.isFavorite || false);
    }
  }, [location.state]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleFavorite = () => {
    const updatedFavoriteStatus = !isFavorite;
    setIsFavorite(updatedFavoriteStatus);
    // Замените http://localhost:3001/media/${product.id} на ваш реальный API-адрес
    axios.put(`http://localhost:3001/media/${product.id}`, { ...product, isFavorite: updatedFavoriteStatus })
      .then(res => {
        // Обработка успешного ответа от сервера, если необходимо
      })
      .catch(err => console.log(err));
  };

  if (!product) {
    return <div>No product data available</div>;
  }

  const { name, description, url, price, color } = product;

  return (
    <div className="product-details-container">
      <form className="product-details-form">
        <motion.div
          className="product-details-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="product-details-info">
            <h1 className="product-details-title">{name}</h1>
            <p className="product-details-description">{description}</p>
            <div className="price-buy-container">
              <div className="price-container">
                <p>{price} руб.</p>
              </div>
              <div className="button-container">
                <motion.button
                  type="button"
                  className="favorite-button-new"
                  onClick={toggleFavorite}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isFavorite ? '🟥 В избранном' : '⬜ В избранное'}
                </motion.button>
                <motion.button
                  type="button"
                  className="buy-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAddToCart}
                >
                  Купить
                </motion.button>
              </div>
              {color && color.map((c, index) => (
                <button key={index} className="color-button">{c}</button>
              ))}
            </div>
          </div>
          <div className="product-details-image-container">
            <img src={url} alt={`Фото ${name}`} className="product-details-image" />
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default ProductDetails;
