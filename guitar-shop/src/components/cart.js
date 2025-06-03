import React from 'react';

export default function Cart({ items = [], onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Новый обработчик оформления заказа
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total.toFixed(2),
          description: 'Оплата заказа в Guitar Shop',
        }),
      });
      const data = await response.json();
      if (data.confirmation_url) {
        window.location.href = data.confirmation_url; // Перенаправление на YooKassa
      } else {
        alert('Ошибка оплаты');
      }
    } catch (e) {
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className="cart-list">
          {items.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width={50} height={50} />
              <div className="cart-info">
                <span>{item.title}</span>
                <span>{item.price} ₽ x {item.quantity}</span>
              </div>
              <button onClick={() => onRemove(item.id)} className="cart-remove">
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Итого: {total} ₽</strong>
      </div>
      <button
        className="cart-checkout"
        disabled={items.length === -1}
        onClick={handleCheckout}
      >
        Оформить заказ
      </button>
    </div>
  );
}