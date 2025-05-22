// services/geminiService.js
const axios = require('axios');
require('dotenv').config();

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
const API_KEY = process.env.GEMINI_API_KEY;

async function askGemini(prompt) {
  const response = await axios.post(
    `${GEMINI_API_URL}?key=${API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }]
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return response.data.candidates[0]?.content?.parts[0]?.text || "No response.";
}

module.exports = { askGemini };
