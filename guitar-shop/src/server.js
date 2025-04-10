const express = require('express');
const app = express();
const pool = require('./components/db.js');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

app.get (`/api/items`, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM guitars');
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
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});