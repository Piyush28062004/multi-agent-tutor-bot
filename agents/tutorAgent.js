const mathAgent = require('./mathAgent');
const physicsAgent = require('./physicsAgent');

function classifySubject(question) {
  const mathKeywords = ['solve', 'calculate', 'equation', '+', '-', '*', '/', 'integrate'];
  const physicsKeywords = ['law', 'force', 'motion', 'velocity', 'gravity', 'energy', 'mass'];

  const lower = question.toLowerCase();

  if (mathKeywords.some(k => lower.includes(k))) return 'math';
  if (physicsKeywords.some(k => lower.includes(k))) return 'physics';
  return 'general';
}

async function handleQuery(question) {
  const subject = classifySubject(question);
  if (subject === 'math') return await mathAgent.answer(question);
  if (subject === 'physics') return await physicsAgent.answer(question);
  return "Sorry, I can only answer Math or Physics questions for now.";
}

module.exports = { handleQuery };
