// tools/calculator.js
function evaluate(expression) {
  if (!/^[\d+\-*/().\s]+$/.test(expression)) {
    throw new Error("Unsafe characters in expression.");
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    if (typeof result !== 'number' || isNaN(result)) {
      throw new Error("Invalid result");
    }
    return result;
  } catch (error) {
    throw new Error("Evaluation failed: " + error.message);
  }
}

module.exports = { evaluate };
