// tools/calculator.js
function evaluate(expression) {
  // Sanitize input: allow only numbers and basic operators
  if (!/^[-+*/\d\s.()]+$/.test(expression)) {
    throw new Error('Unsafe expression');
  }
  return Function(`"use strict"; return (${expression})`)();
}

module.exports = { evaluate };
