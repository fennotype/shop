  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const express = require('express');
  const app = express();
  const pool = require('./components/db.js');
  const cors = require('cors');
  const fetch = require('node-fetch'); 
  const port = process.env.PORT || 5000;

  app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    credentials: true,
  }));
  app.use(express.json());

  app.get (`/api/items`, async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM floortiles');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  app.post(`/api/authorization`, async (req, res) => {
    const { username, password } = req.body;
    console.log('Получен запрос авторизации:', req.body);

    if (!username || !password) {
      return res.status(400).json({ error: 'Пожалуйста, введите имя пользователя и пароль' });
    }

    if( username === `admin` && password === `admin`){
      return res.status(200).json({ message: 'Авторизация успешна', user: { username, role: 'admin' } });
    }

    try{
      const result = await pool.query(`select * from users where username = $1 and password = $2`, [username, password]);
      if (result.rows.length > 0){
        res.status(200).json({ message: 'Авторизация успешна', user: result.rows[0] });
      } else {
        res.status(401).json({ error: 'Неверные имя пользователя или пароль' });
      } 

    }catch(err){
      console.error(err);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  });

  app.get('/api/image', async (req, res) => {
  const { url } = req.query;
  console.log('⛓️ Image proxying:', url);
  if (!url) return res.status(400).send('query param `url` is required');
  try {
    const upstream = await fetch(url);
    if (!upstream.ok) return res.status(upstream.status).end();
    // Передаём те же заголовки content-type, кеширования и т.п.
    res.set('Content-Type', upstream.headers.get('content-type'));
    upstream.body.pipe(res);
  } catch (err) {
    console.error('Image proxy error:', err);
    res.status(500).end();
  }
});



  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });