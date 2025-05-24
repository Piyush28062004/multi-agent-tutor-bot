const gemini = require('../services/geminiService');
const constants = require('../tools/constants');

async function answer(question) {
  // Check if question asks for a constant
  const keys = Object.keys(constants);
  for (let key of keys) {
    if (question.toLowerCase().includes(key)) {
      return `The value of ${key} is ${constants[key]}.`;
    }
  }

  const prompt = `You are a physics tutor. Help the student with: "${question}"`;
  return await gemini.askGemini(prompt);
}

module.exports = { answer };
