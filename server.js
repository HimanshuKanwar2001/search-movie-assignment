require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/api/search', async (req, res) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${req.query.title}&apikey=${process.env.OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.get('/api/movie/:id', async (req, res) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});