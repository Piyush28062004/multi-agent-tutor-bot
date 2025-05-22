// agents/physicsAgent.js
const gemini = require('../services/geminiService');
const constants = require('../tools/constants.json');

async function answer(question) {
  const lower = question.toLowerCase();
  for (let key in constants) {
    if (lower.includes(key.toLowerCase())) {
      return `The ${key} is approximately ${constants[key]}.`;
    }
  }

  const prompt = `You are a physics tutor. Help the student with: "${question}"`;
  return await gemini.askGemini(prompt);
}

module.exports = { answer };
