const express = require('express');
const app = express();
const pool = require('./components/db.js');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api/items`);
})