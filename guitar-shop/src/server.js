process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express');
const app = express();
const pool = require('./components/db.js');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = 5000;
// const { YooKassa } = require('yookassa');
const { v4: uuidv4 } = require('uuid');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

app.get(`/api/items`, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM floortiles');
    console.log('Получены данные:', result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/product/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Неверный ID' });
  } try {
    const result = await pool.query('SELECT * FROM floortiles WHERE id = $1', [id]);
    console.log(`возвращенные данные:`, result.rows)
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Товар не найден' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post(`/api/authorization`, async (req, res) => {
  const { username, password } = req.body;
  console.log('Получен запрос авторизации:', req.body);

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({ message: 'Авторизация успешна', user: { username, role: 'admin' } });
  }
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({ message: 'Авторизация успешна', user });
      } else {
        res.status(401).json({ error: 'Неверные имя пользователя или пароль' });
      }
    } else {
      res.status(401).json({ error: 'Неверные имя пользователя или пароль' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/registration', async (req, res) => {
  const { username, password, email } = req.body;
  console.log('Получен запрос регистрации:', req.body);

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Пожалуйста, заполните все поля' });
  }

  try {
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [username, email]
    );
    if (userExists.rows.length > 0) {
      return res.status(409).json({ error: 'Пользователь с таким именем или почтой уже существует' });
    }
    console.log('Пароль до хеширования:', password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Хеш пароля:', hashedPassword);
    await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
      [username, hashedPassword, email]
    );
    res.status(201).json({ message: 'Регистрация успешна' });
  } catch (err) {
    console.error('Ошибка регистрации:', err);
    res.status(500).json({ error: 'Ошибка сервера при регистрации' });
  }
});


app.post('/api/create-payment', async (req, res) => {
  const { amount, description } = req.body;
  try {
    const idempotenceKey = uuidv4();
    const payment = await yookassa.createPayment({
      amount: {
        value: amount,
        currency: 'RUB',
      },
      confirmation: {
        type: 'redirect',
        return_url: 'http://localhost:3000/',
      },
      capture: true,
      description: description || 'Оплата заказа',
    }, idempotenceKey);

    res.json({ confirmation_url: payment.confirmation.confirmation_url });
  } catch (error) {
    console.error('Ошибка создания платежа:', error);
    res.status(500).json({ error: 'Ошибка создания платежа' });
  }
});


module.exports = app;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});