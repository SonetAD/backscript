const readline = require('readline');

const userInput = (message) => {
  return new Promise((resolve, reject) => {
    try {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(message, (answer) => {
        rl.close();
        resolve(answer);
      });
    } catch (err) {
      reject(null);
    }
  });
};

module.exports = userInput;
