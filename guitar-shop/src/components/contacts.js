import React, { useState } from 'react';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Надо допилить сейв формы в бд 
  };

  return (
    <div className="about-container">
      <h1 className="main-title">Контакты</h1>
      <div className="contacts-info-block">
        <div className="section-title">ООО "АТЛАС НТС"</div>
        <div className="section-text">ИНН: 7701234567</div>
        <div className="section-text">ОГРН: 1234567890123</div>
        <div className="section-title">Наш адрес</div>
        <div className="section-text">г. Москва, ул. Промышленная, д. 10, офис 5</div>
        <div className="section-title">Телефон</div>
        <div className="section-text">+7 (495) 987-65-43</div>
        <div className="section-title">Email</div>
        <div className="section-text">info@atlas-nts.ru</div>
      </div>
      <div className="contacts-form-section">
        <div className="section-title">Связаться с нами</div>
        {sent ? (
          <div className="contacts-success-message">Спасибо за ваше сообщение!</div>
        ) : (
          <form className="contacts-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Отправить</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacts;