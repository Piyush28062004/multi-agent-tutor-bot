// agents/mathAgent.js
const gemini = require('../services/geminiService');
const calculator = require('../tools/calculator');

async function answer(question) {
  const calcMatch = question.match(/([-+*/\d\s.]+)/);
  if (calcMatch) {
    try {
      const result = calculator.evaluate(calcMatch[0]);
      return `The result is: ${result}`;
    } catch {
      return "I couldn't calculate that expression.";
    }
  }

  const prompt = `You are a math tutor. Help the student with: "${question}"`;
  return await gemini.askGemini(prompt);
}

module.exports = { answer };
