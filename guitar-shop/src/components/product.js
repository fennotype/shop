import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/product/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => {
        console.error('Ошибка при получении данных о товаре:', error);
        setError('Не удалось загрузить информацию о товаре');
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className='product-detail'>
      <img src={`/img/${product.img}`} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <b>{product.price}$</b>
      <button
        className="add-to-cart-btn"
        style={{
          padding: '12px 32px',
          background: 'linear-gradient(90deg, #d1c4e9 0%, #ffd1dc 100%)',
          color: '#23395d',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px #d1c4e955',
          letterSpacing: '0.5px',
          marginTop: '18px',
          transition: 'background 0.2s, color 0.2s, transform 0.2s'
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg, #ffd1dc 0%, #d1c4e9 100%)';
          e.currentTarget.style.color = '#7A1623';
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg, #d1c4e9 0%, #ffd1dc 100%)';
          e.currentTarget.style.color = '#23395d';
          e.currentTarget.style.transform = 'none';
        }}
        onClick={() => onAddToCart && onAddToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.img,
        })}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductDetail;