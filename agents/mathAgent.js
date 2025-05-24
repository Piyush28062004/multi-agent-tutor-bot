const gemini = require('../services/geminiService');
const calculator = require('../tools/calculator');

async function answer(question) {
  console.log("Question received:", question);

  // Use regex to match math expressions like "2+2" from a sentence like "what is 2+2"
  const calcMatch = question.toLowerCase().match(/([\d\s()+\-*/.]+)/);
  const expression = calcMatch ? calcMatch[1].trim() : null;

  console.log("Extracted expression:", expression);

  if (expression && /^[\d+\-*/().\s]+$/.test(expression)) {
    try {
      const result = calculator.evaluate(expression);
      return `The result is: ${result}`;
    } catch (err) {
      console.error("Evaluation error:", err.message);
      return "I couldn't calculate that expression.";
    }
  }

  const prompt = `You are a math tutor. Help the student with: "${question}"`;
  return await gemini.askGemini(prompt);
}

module.exports = { answer };
