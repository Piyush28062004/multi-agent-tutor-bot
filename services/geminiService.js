require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;

async function askGemini(prompt) {
  if (!API_KEY) {
    console.log("GEMINI_API_KEY not found, returning mock response.");
    if (prompt.toLowerCase().includes("math")) {
      return "This is a mock answer for your math question.";
    } else if (prompt.toLowerCase().includes("physics")) {
      return "This is a mock answer for your physics question.";
    } else {
      return "Sorry, I can only answer Math or Physics questions for now.";
    }
  }

  // Real API code would go here if key was present

  return "Real API call disabled: no API key found.";
}

module.exports = { askGemini };
