// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const tutorAgent = require('./agents/tutorAgent');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // serve frontend

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).send({ error: 'Question is required.' });

  try {
    const response = await tutorAgent.handleQuery(question);
    res.send({ answer: response });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send({ error: 'Internal server error.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
